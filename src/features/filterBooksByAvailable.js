const filterBooksByAvailable = (books, available) => {
 
    return books.filter(book => book.isAvailable === JSON.parse(available));    
}

export default filterBooksByAvailable;