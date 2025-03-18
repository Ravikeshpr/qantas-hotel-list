import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import HotelInfo from "./HotelInfo";

describe("HotelInfo", () => {
    const props = {
        address: ["7-11 Talavera Rd", "North Ryde"],
        name: "Courtyard by Marriott Sydney-North Ryde",
        rating: {
            ratingValue: 4.5,
            ratingType: "self",
        },
        offerName: "Deluxe Balcony Room",
        cancellationPolicy: "NOT_REFUNDABLE",
    };
    it("HotelInfo renders as expected without props ", () => {
        const { container } = render(<HotelInfo />);
        expect(container.querySelector("address")).toBeEmptyDOMElement();
        expect(
            screen.queryByRole("7-11 Talavera Rd, North Ryde")
        ).not.toBeInTheDocument();
    });
    it("HotelInfo always renders same UI with correct props", () => {
        const { container } = render(<HotelInfo {...props} />);
        expect(container).toMatchSnapshot();
    });

    it("HotelInfo cancellationPolicy shows in Title case", () => {
        render(<HotelInfo {...props} />);
        expect(screen.getByText("Not Refundable")).toBeInTheDocument();
    });

    it("HotelInfo renders hotel Name with props", () => {
        render(<HotelInfo {...props} />);
        expect(
            screen.getByText("Courtyard by Marriott Sydney-North Ryde")
        ).toBeInTheDocument();
    });
    it("HotelInfo renders correct address with props", () => {
        render(<HotelInfo {...props} />);
        expect(
            screen.getByText("7-11 Talavera Rd, North Ryde")
        ).toBeInTheDocument();
    });

    it("HotelInfo renders correct offerName with props", () => {
        render(<HotelInfo {...props} />);
        expect(screen.getByText("Deluxe Balcony Room")).toBeInTheDocument();
    });
});
