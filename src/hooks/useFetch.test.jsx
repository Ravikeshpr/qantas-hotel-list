import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "./useFetch";
import { describe, it, expect, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";

const mockResponse = [
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

describe("useFetch Hook", () => {
    // Mock the fetch function.

    global.fetch = vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(mockResponse),
        })
    );
    let returnValue;
    beforeEach(() => {
        returnValue = renderHook(() => useFetch("http://example.com"));
    });

    it("Should show loading true before response", () => {
        expect(returnValue.result.current.isLoading).toBe(true);
    });

    it("Should show loading false and data after response", async () => {
        await waitFor(() => {
            expect(returnValue.result.current.data).toBe(mockResponse);
            expect(returnValue.result.current.isLoading).toBe(false);
        });
    });
});
