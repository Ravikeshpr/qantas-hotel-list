import React from "react";
import { snakeCaseToTitleCase } from "./stringUtils";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("sortUtils", () => {
    it("Should convert Snake case to title case string ", () => {
        const snakeCaseHelloWorld = "HELLO_WORLD";
        const titelCaseHelloWorld = "Hello World";
        const result = snakeCaseToTitleCase(snakeCaseHelloWorld);
        expect(result).toBe(titelCaseHelloWorld);
    });
});
