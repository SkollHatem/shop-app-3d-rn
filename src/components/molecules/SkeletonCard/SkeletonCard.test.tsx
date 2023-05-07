import React from "react";
import { render } from "@testing-library/react-native";

import SkeletonCard from "./SkeletonCard";

describe("SkeletonCard", () => {
    const instance = render(<SkeletonCard />);

    it("renders SkeletonCard component", () => {
        expect(instance).toBeTruthy;
    });
});
