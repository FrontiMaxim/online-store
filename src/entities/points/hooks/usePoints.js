import { useEffect, useState } from "react";
import fetchGetPoints from "../api/fetchGetPoints";

const usePoints = (url) => {

    const [points, setPoints] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchGetPoints(url)
            .then(response => response.json())
            .then(data => setPoints(data))
            .catch(error => setError(error));
    }, []);

    return [points, error];
}

export default usePoints;