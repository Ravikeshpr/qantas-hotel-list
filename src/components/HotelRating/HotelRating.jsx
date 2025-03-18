import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faStarHalfAlt,
    faCircle,
    faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { HotelRatingContainer } from "./HotelRating.style";
function HotelRating({ value = 3.5, type = "cirle", count = 5 }) {
    return (
        <HotelRatingContainer>
            {[...Array(count)].map((_, i) => (
                <span key={i}>
                    {value >= i + 1 ? (
                        <FontAwesomeIcon
                            style={{ color: "yellow" }}
                            icon={type === "star" ? faStar : faCircle}
                        />
                    ) : value >= i + 0.5 ? (
                        <FontAwesomeIcon
                            style={{ color: "yellow" }}
                            icon={
                                type === "star"
                                    ? faStarHalfAlt
                                    : faCircleHalfStroke
                            }
                        />
                    ) : (
                        <FontAwesomeIcon
                            style={{ color: "gray" }}
                            icon={type === "star" ? faStar : faCircle}
                        />
                    )}
                </span>
            ))}
        </HotelRatingContainer>
    );
}

export default HotelRating;
