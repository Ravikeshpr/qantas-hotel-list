import React from "react";
import { HotelCardContainer, StyledImage, StyledText } from "./HotelCard.style";

function HotelCard({ image, promotion }) {
    return (
        <HotelCardContainer>
            <StyledImage alt="Hotel preview img" src={image.url}></StyledImage>
            <StyledText>{promotion.title}</StyledText>
        </HotelCardContainer>
    );
}

export default HotelCard;
