import TYPE_SORT from '../shared/constants/typeSort';
import filterBooksByAvailable from './filterBooksByAvailable';
import filterBooksByCategory from './filterBooksByCategory';
import sortBooksByName from './sortBooksByName';
import sortBooksByPrice from './sortBooksByPrice';

const editListBySettings = (list, settings) => {

    let result = [...list];

    const available = settings.available;
    const categories = settings.categories;
    const typeSort = settings.typeSort;

    if(available !== 'all') {
        result = filterBooksByAvailable(result, available);
    }

    if(categories) {

        const copyResult = [...result];
        result = [];

        categories.forEach(category => {
            result = result.concat(filterBooksByCategory(copyResult, category));
        });
    }

    if(typeSort === TYPE_SORT.BY_NAME) {
        result = sortBooksByName(result);
    } else if(typeSort === TYPE_SORT.BY_PRICE) {
        result = sortBooksByPrice(result);
    }

    return result;
}

export default editListBySettings;