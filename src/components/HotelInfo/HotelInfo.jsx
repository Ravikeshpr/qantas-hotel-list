import React from "react";
import {
    HotelInfoContainer,
    HotelNameAndAddressContainer,
    NameAndRatingContainer,
    StyledAdress,
    StyledCancellationPolicy,
    StyledName,
    StyledOffer,
} from "./HotelInfo.style";
import HotelRating from "../HotelRating/HotelRating";
import { snakeCaseToTitleCase } from "../../utils/stringUtils";

function HotelInfo({
    address = [],
    name,
    rating,
    offerName,
    cancellationPolicy,
}) {
    return (
        <HotelInfoContainer>
            <NameAndRatingContainer>
                <HotelNameAndAddressContainer>
                    <StyledName>{name}</StyledName>
                    <StyledAdress>{address?.join(", ")}</StyledAdress>
                </HotelNameAndAddressContainer>

                <HotelRating
                    value={rating?.ratingValue}
                    type={rating?.ratingType}
                />
            </NameAndRatingContainer>

            <StyledOffer>{offerName}</StyledOffer>
            <StyledCancellationPolicy>
                {cancellationPolicy
                    ? snakeCaseToTitleCase(cancellationPolicy)
                    : ""}
            </StyledCancellationPolicy>
        </HotelInfoContainer>
    );
}

export default HotelInfo;
