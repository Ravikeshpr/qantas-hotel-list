import { useEffect, useState } from "react";
import { sortArrayOfObjects } from "../utils/sortUtils";
import { SORT_ORDERS } from "../constants/HotelListContants";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setData(
                    sortArrayOfObjects(
                        data,
                        SORT_ORDERS.DESCENDING,
                        "offer.displayPrice.amount"
                    )
                );
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }, [url]);

    return { data, setData, isLoading, error };
};

export default useFetch;
