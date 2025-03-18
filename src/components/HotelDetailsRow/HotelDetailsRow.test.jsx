import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import HotelDetailRow from "./HotelDetailsRow";

describe("HotelDetailRow", () => {
    const props = {
        hotel: {
            id: "cxd650nuyo",
            property: {
                propertyId: "P107801",
                title: "Courtyard by Marriott Sydney-North Ryde",
                address: ["7-11 Talavera Rd", "North Ryde"],
                previewImage: {
                    url: "https://unsplash.it/145/125/?random",
                    caption: "Image of Courtyard by Marriott Sydney-North Ryde",
                    imageType: "PRIMARY",
                },
                rating: {
                    ratingValue: 4.5,
                    ratingType: "self",
                },
            },
            offer: {
                promotion: {
                    title: "Exclusive Deal",
                    type: "MEMBER",
                },
                name: "Deluxe Balcony Room",
                displayPrice: {
                    amount: 329.0,
                    currency: "AUD",
                },
                savings: {
                    amount: 30.0,
                    currency: "AUD",
                },
                cancellationOption: {
                    cancellationType: "NOT_REFUNDABLE",
                },
            },
        },
    };
    it("Renders same HotelDetailRow content with the same given input", () => {
        const { container } = render(<HotelDetailRow hotel={props.hotel} />);
        expect(container).toMatchSnapshot();
    });
});
