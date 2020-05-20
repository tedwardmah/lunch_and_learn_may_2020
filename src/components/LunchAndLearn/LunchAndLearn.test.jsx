import React from "react";
import { render } from "@testing-library/react";
import LunchAndLearn from "./LunchAndLearn";

describe("<LunchAndLearn>", () => {
  it("renders with minimal props", () => {
    render(<LunchAndLearn />);
  });
});
