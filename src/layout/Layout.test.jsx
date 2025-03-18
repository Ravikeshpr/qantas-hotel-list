import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Layout", () => {
    it("Layout childern should be wrapped in main element", () => {
        render(<Layout />);
        expect(screen.getByTestId("main-content")).toBeInTheDocument();
    });

    it("Header with logo should be part of Layout component", () => {
        render(<Layout />);
        expect(screen.getByAltText("Qantas logo")).toBeInTheDocument();
    });

    it("Layout component should match the snapshot", () => {
        const { container } = render(<Layout />);
        expect(container).toMatchSnapshot();
    });
});
