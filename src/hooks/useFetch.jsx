import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setData(data);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }, [url]);

    return { data, setData, isLoading, error };
};

export default useFetch;
