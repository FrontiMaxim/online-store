const calculateTotal = (books) => {
    return books.reduce((total, book) => total += book.price, 0);
}

export default calculateTotal;