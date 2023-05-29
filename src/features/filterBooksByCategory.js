const filterBooksByCategory = (books, category) => {

    return books.filter(book => book.category === category);
}

export default filterBooksByCategory;