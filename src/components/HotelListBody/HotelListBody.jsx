import React, { useContext } from "react";
import { SectionContainer } from "../../utils/styleUtils";
import { HotelListContext } from "../../context/HotelList";

function HotelListBody() {
    const { data, isLoading, error } = useContext(HotelListContext);

    if (isLoading) return <SectionContainer>Loading...</SectionContainer>;
    if (error)
        return <SectionContainer>Error: {error.message}</SectionContainer>;
    return (
        <SectionContainer>
            {data.map((hotel) => {
                return JSON.stringify(hotel);
            })}
        </SectionContainer>
    );
}

export default HotelListBody;
