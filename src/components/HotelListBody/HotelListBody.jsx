import React, { useContext } from "react";
import { SectionContainer } from "../../utils/styleUtils";
import { HotelListContext } from "../../context/HotelList";
import HotelDetailRow from "../HotelDetailsRow/HotelDetailsRow";

function HotelListBody() {
    const { data, isLoading, error } = useContext(HotelListContext);

    if (isLoading) return <SectionContainer>Loading...</SectionContainer>;
    if (error)
        return <SectionContainer>Error: {error.message}</SectionContainer>;
    return (
        <SectionContainer>
            {data.map((hotel) => {
                return <HotelDetailRow key={hotel.id} hotel={hotel} />;
            })}
        </SectionContainer>
    );
}

export default HotelListBody;
