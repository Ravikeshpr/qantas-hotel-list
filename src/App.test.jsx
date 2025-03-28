import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("App", () => {
    it("renders without crashing", () => {
        render(<App />);
        expect(screen.getAllByText("Loading...").length).toBe(2);
    });
});
