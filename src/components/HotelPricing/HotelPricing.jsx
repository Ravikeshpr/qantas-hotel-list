import React from "react";
import {
    HotelPricingContainer,
    StyledFlexSpan,
    StyledMarkerSpan,
    StyledPerNightRate,
    StyledSaving,
    StyledTilt,
    StyledTopText,
} from "./HotelPricing.style";

function HotelPricing({ offer }) {
    return (
        <HotelPricingContainer>
            <StyledTopText>
                {`1 night total(${offer.displayPrice.currency})`}
            </StyledTopText>
            <StyledPerNightRate>
                <StyledMarkerSpan>$</StyledMarkerSpan>
                {offer.displayPrice.amount}
            </StyledPerNightRate>
            <StyledSaving>
                {offer.savings ? (
                    <StyledFlexSpan>
                        Save ${offer.savings.amount}
                        <StyledTilt>~</StyledTilt>
                    </StyledFlexSpan>
                ) : null}
            </StyledSaving>
        </HotelPricingContainer>
    );
}

export default HotelPricing;
