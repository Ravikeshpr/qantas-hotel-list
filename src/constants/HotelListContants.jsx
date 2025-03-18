export const baseURL = "http://localhost:8080";

export const SORT_ORDERS = {
    ASSENDING: "asc",
    DESCENDING: "desc",
};

export const OPTIONS = [
    { id: SORT_ORDERS.DESCENDING, value: "Price high-low" },
    { id: SORT_ORDERS.ASSENDING, value: "Price low-high" },
];
