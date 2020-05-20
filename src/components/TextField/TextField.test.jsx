import React from "react";
import { render } from "@testing-library/react";
import TextField from "./TextField";

describe("<TextField>", () => {
  it("renders with minimal props", () => {
    render(<TextField />);
  });
});
