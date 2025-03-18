import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Header", () => {
    it("Header component should have brand logo", () => {
        render(<Header />);
        expect(screen.getByAltText("Qantas logo")).toBeInTheDocument();
    });

    it("Header component should maintain the structure", () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
