import React from "react";
import { sortArrayOfObjects } from "./sortUtils";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

const arrayOfObjectsUnshorted = [
    { parent: { child: 1 } },
    { parent: { child: 3 } },
    { parent: { child: 2 } },
];

describe("sortUtils", () => {
    it("should sort array in assending order with asc input ", () => {
        const ascSortedArray = [
            { parent: { child: 1 } },
            { parent: { child: 2 } },
            { parent: { child: 3 } },
        ];
        const result = sortArrayOfObjects(
            arrayOfObjectsUnshorted,
            "asc",
            "parent.child"
        );
        expect(result).toStrictEqual(ascSortedArray);
    });
    it("should sort array in descending order with desc input ", () => {
        const descSortedArray = [
            { parent: { child: 3 } },
            { parent: { child: 2 } },
            { parent: { child: 1 } },
        ];
        const result = sortArrayOfObjects(
            arrayOfObjectsUnshorted,
            "desc",
            "parent.child"
        );
        expect(result).toStrictEqual(descSortedArray);
    });
});
