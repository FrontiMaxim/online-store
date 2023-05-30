const filterBooksByCategory = (books, category) => {

    return books.filter(book => book.category.toLowerCase() === category.toLowerCase());
}

export default filterBooksByCategory;