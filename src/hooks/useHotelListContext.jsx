import { useState } from "react";
import useFetch from "./useFetch";

const baseURL = "http://localhost:8080";

const SORT_ORDERS = {
    ASSENDING: "asc",
    DESCENDING: "desc",
};

export const useHotelListContext = () => {
    const { data, setData, isLoading, error } = useFetch(`${baseURL}/hotels`);
    const [order, setOrder] = useState(SORT_ORDERS.DESCENDING);

    return {
        isLoading,
        error,
        data,
        order,
        setData,
        setOrder,
    };
};
