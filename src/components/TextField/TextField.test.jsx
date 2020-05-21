import React from "react";
import { render } from "@testing-library/react";
import TextField from "./TextField";

const EXAMPLE_LABEL = "Topic";
const EXAMPLE_ERROR = "Oh no something bad";

describe("<TextField>", () => {
  it("renders with minimal props", () => {
    render(<TextField />);
  });

  it("should render a label using props", () => {
    const { getByLabelText } = render(<TextField label={EXAMPLE_LABEL} />);
    expect(getByLabelText(EXAMPLE_LABEL)).toBeInTheDocument();
  });

  it("should render an error if provided in props", () => {
    const { getByText } = render(
      <TextField label={EXAMPLE_LABEL} error={EXAMPLE_ERROR} />
    );
    expect(getByText(EXAMPLE_ERROR)).toHaveStyle("color: red");
  });
});
