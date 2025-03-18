import React from "react";
import { render, screen } from "@testing-library/react";
import HotelCard from "./HotelCard";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("HotelCard", () => {
    const props = {
        promotion: {
            title: "promotion title",
        },
        image: {
            url: "https://unsplash.it/145/125/?random",
        },
    };
    it("renders correct promotion title ", () => {
        render(<HotelCard promotion={props.promotion} image={props.image} />);
        expect(screen.getByText("promotion title")).toBeInTheDocument();
    });

    it("renders correct  image", () => {
        render(<HotelCard promotion={props.promotion} image={props.image} />);
        expect(screen.getByAltText("Hotel preview img")).toBeInTheDocument();
    });
});
