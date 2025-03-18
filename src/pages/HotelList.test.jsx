import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import HotelList from "./HotelList";
import { HotelListContext } from "../context/HotelList";
import { useHotelListContext } from "../hooks/useHotelListContext";

const mockData = [
    {
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
    {
        id: "mesq6mggyn",
        property: {
            propertyId: "P107802",
            title: "Primus Hotel Sydney",
            address: ["339 Pitt St", "Sydney"],
            previewImage: {
                url: "https://unsplash.it/145/125/?random",
                caption: "Image of Primus Hotel Sydney",
                imageType: "PRIMARY",
            },
            rating: {
                ratingValue: 5,
                ratingType: "self",
            },
        },
        offer: {
            promotion: {
                title: "Exclusive Deal",
                type: "MEMBER",
            },
            name: "Deluxe King",
            displayPrice: {
                amount: 375.0,
                currency: "AUD",
            },
            savings: {
                amount: 28.0,
                currency: "AUD",
            },
            cancellationOption: {
                cancellationType: "FREE_CANCELLATION",
            },
        },
    },
];

vi.mock("../hooks/useHotelListContext");
const mockedUseHotelListContext = vi.mocked(useHotelListContext);

describe("HotelList", () => {
    it("HotelList found should render list head and body", () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: false,
            error: null,
            data: mockData,
            order: "desc",
            changeOrder: vi.fn(() => "desc"),
        });
        const { container } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelList />
            </HotelListContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });
});
