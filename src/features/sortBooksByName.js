const sortBooksByName = (books) => {

    const result = [...books];

    result.sort((book1, book2) => {
        if (book1.name < book2.name) return -1;
    });

    return result;
}

export default sortBooksByName;