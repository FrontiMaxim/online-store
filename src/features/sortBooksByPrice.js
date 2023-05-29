const sortBooksByPrice = (books) => {

    const result = [...books];

    result.sort((book1, book2) => {
        if (book1.price < book2.price) return -1;
    });

    return result;
}

export default sortBooksByPrice;