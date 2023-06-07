const fetchPostOrder = async (url, body) => {
    return fetch(url, {
        body: JSON.stringify(body),
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export default fetchPostOrder;