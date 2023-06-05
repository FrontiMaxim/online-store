import { useEffect, useState } from "react";
import fetchGetBooks from "../api/fetchGetBooks";

const useBooks = (url) => {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchGetBooks(url)
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, []);

    return { books, isLoading, error };
}

export default useBooks;