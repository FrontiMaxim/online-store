import { useEffect, useState } from "react";
import fetchGetBooks from "../api/fetchGetBooks";

const useBooks = (url) => {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGetBooks(url)
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => setError(error));
    }, []);

    return [books, error];
}

export default useBooks;