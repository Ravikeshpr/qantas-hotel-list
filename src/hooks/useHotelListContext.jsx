import { useState } from "react";
import { baseURL, SORT_ORDERS } from "../constants/HotelListContants";
import useFetch from "./useFetch";
import { sortArrayOfObjects } from "../utils/sortUtils";

export const useHotelListContext = () => {
    const { data, setData, isLoading, error } = useFetch(`${baseURL}/hotels`);
    const [order, setOrder] = useState(SORT_ORDERS.DESCENDING);

    const changeOrder = (order) => {
        setOrder(order);
        setData(sortArrayOfObjects(data, order, "offer.displayPrice.amount"));
    };

    return {
        isLoading,
        error,
        data,
        order,
        changeOrder,
    };
};
