import { useState } from "react";

import fetchPostOrder from "../api/fetchPostOrder";

const useBuy = () => {

    const [isSuccessfully, setIsSuccessfully] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    
    const buy = async (url, body) => {
        setisLoading(true);
        fetchPostOrder(url, body)
            .then(response => response.status === 201 ? setIsSuccessfully(true) : setIsSuccessfully(false))
            .catch(() => setIsSuccessfully(false))
            .finally(() => setisLoading(false));
    }

    return { buy , isSuccessfully, isLoading };
}

export default useBuy;