import React from "react";
import { act, render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import HotelListBody from "./HotelListBody";
import { HotelListContext } from "../../context/HotelList";
import { useHotelListContext } from "../../hooks/useHotelListContext";

const mockData = [
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

describe("HotelListBody", () => {
    it("HotelListBody shows value from provider renders hotelName", () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: false,
            error: null,
            data: mockData,
            order: "asc",
            changeOrder: vi.fn(() => "asc"),
        });
        const { getByText } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelListBody />
            </HotelListContext.Provider>
        );
        expect(getByText("Primus Hotel Sydney")).toBeInTheDocument();
    });

    it("HotelListBody shows Loading when isLoadingFalse", async () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: true,
            error: null,
            data: [],
            order: "asc",
            changeOrder: vi.fn(() => "asc"),
        });
        const { getByText } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelListBody />
            </HotelListContext.Provider>
        );
        expect(getByText("Loading...")).toBeInTheDocument();
    });

    it("HotelListBody shows error message when error", async () => {
        mockedUseHotelListContext.mockReturnValue({
            isLoading: false,
            error: { message: "Some error occured" },
            data: [],
            order: "asc",
            changeOrder: vi.fn(() => "asc"),
        });
        const { getByText } = render(
            <HotelListContext.Provider value={useHotelListContext()}>
                <HotelListBody />
            </HotelListContext.Provider>
        );
        expect(getByText("Error: Some error occured")).toBeInTheDocument();
    });
});
