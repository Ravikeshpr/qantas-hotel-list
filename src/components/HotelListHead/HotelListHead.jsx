import React, { useContext } from "react";
import { SectionContainer } from "../../utils/styleUtils";
import { HotelListContext } from "../../context/HotelList";
import { SORT_ORDERS, OPTIONS } from "../../constants/HotelListContants";
import { HotelListHeadContainer, StyledP } from "./HotelListHead.style";

function HotelListHead() {
    const { order, changeOrder, data, isLoading } =
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
                    <StyledP>
                        <strong data-testid="numberOfHotels">{`${data?.length}`}</strong>{" "}
                        <i>hotels in </i>
                        <strong>Sydney</strong>.
                    </StyledP>
                    <span>
                        <label htmlFor="order">{`Sort by `}</label>
                        <select
                            onChange={(e) => changeOrder(e.target.value)}
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
