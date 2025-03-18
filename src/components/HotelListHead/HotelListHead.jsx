import React, { useContext } from "react";
import { HotelListContext } from "../../context/HotelList";
import { HotelListHeadContainer } from "./HotelListHead.style";

const OPTIONS = [
    { id: "desc", value: "Price high-low" },
    { id: "asc", value: "Price low-high" },
];

function HotelListHead() {
    const { order, setOrder, setData, data, isLoading } =
        useContext(HotelListContext);

    if (isLoading) {
        return <HotelListHeadContainer>Loading...</HotelListHeadContainer>;
    }
    if (!data || !data.length) {
        return <HotelListHeadContainer>No hotels found</HotelListHeadContainer>;
    }
    return (
        <>
            {data && data.length && (
                <HotelListHeadContainer>
                    <p>
                        <strong data-testid="numberOfHotels">{`${data?.length}`}</strong>{" "}
                        <i>hotels in </i>
                        <strong>Sydney</strong>.
                    </p>
                    <span>
                        <label htmlFor="order">{`Sort by `}</label>
                        <select
                            value={order}
                            id="order"
                            data-testid="orderDropdown"
                        >
                            {OPTIONS.map((option) => {
                                return (
                                    <option
                                        data-testid="sortOptions"
                                        key={option.id}
                                        value={option.id}
                                    >
                                        {option.value}
                                    </option>
                                );
                            })}
                        </select>
                    </span>
                </HotelListHeadContainer>
            )}
        </>
    );
}

export default HotelListHead;
