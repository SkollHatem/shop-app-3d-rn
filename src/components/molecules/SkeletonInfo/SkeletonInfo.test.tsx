import React from "react";
import { render } from "@testing-library/react-native";

import SkeletonInfo from "./SkeletonInfo";

describe("SkeletonInfo", () => {
    const instance = render(<SkeletonInfo />);

    it("renders SkeletonInfo component", () => {
        expect(instance).toBeTruthy;
    });
});
