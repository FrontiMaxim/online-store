import { useEffect, useState } from "react";

const useCurrentPosition = () => {

    const [position, setPosition] = useState({
        latitude: 0,
        longitude: 0
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
    
            setPosition({
                latitude,
                longitude
            })
        });
    }, [])

    return {
        latitude: position.latitude,
        longitude: position.longitude
    }

}

export default useCurrentPosition;


