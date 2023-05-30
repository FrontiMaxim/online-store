import CATEGORIES from '../../shared/constants/categories';
import TYPE_SORT from '../../shared/constants/typeSort';

export const dataSelectSort = [
    {
        key: 'Не сортировать',
        value: TYPE_SORT.NO_SORT
    },
    {
        key: 'По цене',
        value: TYPE_SORT.BY_PRICE
    },
    {
        key: 'По названию',
        value: TYPE_SORT.BY_NAME
    }
];

export const dataSelectAvailable = [
    {
        key: 'Все',
        value: 'all'
    },
    {
        key: 'В наличии',
        value: true
    },
    {
        key: 'Нет в наличии',
        value: false
    }
];

export const dataCheckbox = [
    {
        key: 'Классика',
        value: CATEGORIES.CLASSIC
    },
    {
        key: 'Образование',
        value: CATEGORIES.EDUCATIONAL
    },
    {
        key: 'Роман',
        value: CATEGORIES.NOVEL
    },
    {
        key: 'Фантастика',
        value: CATEGORIES.FANTASTIC
    }
];