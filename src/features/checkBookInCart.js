const checkBookInCart = (books, id) => {
    return books.find(book =>  book.id === id);
}

export default checkBookInCart;