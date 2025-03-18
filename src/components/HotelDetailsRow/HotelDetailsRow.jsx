import React from "react";
import {
    HotelDetailsRowContainer,
    HotelNameAndPriceContainer,
} from "./HotelDetailsRow.style";
import HotelCard from "../HotelCard/HotelCard";
import HotelInfo from "../HotelInfo/HotelInfo";
import HotelPricing from "../HotelPricing/HotelPricing";

function HotelDetailRow({ hotel }) {
    return (
        <HotelDetailsRowContainer>
            <HotelCard
                image={hotel.property.previewImage}
                promotion={hotel.offer.promotion}
            />
            <HotelNameAndPriceContainer>
                <HotelInfo
                    address={hotel.property.address}
                    name={hotel.property.title}
                    rating={hotel.property.rating}
                    offerName={hotel.offer.name}
                    cancellationPolicy={
                        hotel.offer.cancellationOption.cancellationType
                    }
                />
                <HotelPricing offer={hotel.offer} />
            </HotelNameAndPriceContainer>
        </HotelDetailsRowContainer>
    );
}

export default HotelDetailRow;
