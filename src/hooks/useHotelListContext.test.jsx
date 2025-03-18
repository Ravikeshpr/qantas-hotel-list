import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { useHotelListContext } from "./useHotelListContext";
import { describe, it, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";

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
];

describe("useHotelListContext Hook", () => {
    // Mock the fetch function.

    global.fetch = vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockData),
        })
    );

    it("Should show loading false and data after response", async () => {
        const { result } = renderHook(() => useHotelListContext());
        await waitFor(() => {
            expect(result.current.data).toBe(mockData);
            expect(result.current.isLoading).toBe(false);
        });
    });
});
