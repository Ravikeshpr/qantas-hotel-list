import React from "react";
import { act, getByTestId, render, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import HotelListHead from "./HotelListHead";
import { HotelListContext } from "../../context/HotelList";
import { useHotelListContext } from "../../hooks/useHotelListContext";

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

vi.mock("../../hooks/useHotelListContext");
const mockedUseHotelListContext = vi.mocked(useHotelListContext);

describe("HotelListHead", () => {
    it("HotelListHead should render loading when isLoading true", () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: true,
            error: null,
            data: [],
            order: "desc",
            changeOrder: vi.fn(() => "desc"),
        });
        const { getByText } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelListHead />
            </HotelListContext.Provider>
        );
        expect(getByText("Loading...")).toBeInTheDocument();
    });

    it("HotelListHead should render message when data array is empty", () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: false,
            error: null,
            data: [],
            order: "desc",
            changeOrder: vi.fn(() => "desc"),
        });
        const { getByText } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelListHead />
            </HotelListContext.Provider>
        );
        expect(getByText("No hotels found")).toBeInTheDocument();
    });

    it("HotelList found should render corect number of hotels", () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: false,
            error: null,
            data: mockData,
            order: "desc",
            changeOrder: vi.fn(() => "desc"),
        });
        const { getByTestId } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelListHead />
            </HotelListContext.Provider>
        );
        expect(getByTestId("numberOfHotels").textContent).toBe("2");
    });

    it("Simulate selection of sort order", () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: false,
            error: null,
            data: mockData,
            order: "asc",
            changeOrder: vi.fn(() => "desc"),
        });
        const { getByTestId, getAllByTestId } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelListHead />
            </HotelListContext.Provider>
        );
        fireEvent.change(getByTestId("orderDropdown"), {
            target: { value: 1 },
        });
        let options = getAllByTestId("sortOptions");
        expect(options[0].selected).toBeFalsy();
        expect(options[1].selected).toBeTruthy();
    });
});
