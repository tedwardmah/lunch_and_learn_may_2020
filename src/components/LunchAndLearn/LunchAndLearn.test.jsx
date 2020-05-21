import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LunchAndLearn from "./LunchAndLearn";

const FIRST_NAME_LABEL = "First Name";
const LAST_NAME_LABEL = "Last Name";
const TOPIC_LABEL = "Topic";

describe("<LunchAndLearn>", () => {
  it("renders with minimal props", () => {
    render(<LunchAndLearn />);
  });

  it("renders a first name input", () => {
    const { getByLabelText } = render(<LunchAndLearn />);
    expect(getByLabelText(FIRST_NAME_LABEL)).toBeRequired();
  });

  it("renders a last name input", () => {
    const { getByLabelText } = render(<LunchAndLearn />);
    expect(getByLabelText(LAST_NAME_LABEL)).toBeRequired();
  });

  it("renders a submit button", () => {
    const { getByRole } = render(<LunchAndLearn />);
    expect(getByRole("button", { name: "Submit Form" })).toBeInTheDocument();
  });

  it("renders required errors for all required fields", () => {
    const { getByRole, getAllByText } = render(<LunchAndLearn />);
    userEvent.click(getByRole("button", { name: "Submit Form" }));
    expect(getAllByText("Field is required")).toHaveLength(3);
  });

  it("clears required errors on submit when values are entered", () => {
    const { getByRole, getAllByText, getByLabelText, queryByText } = render(
      <LunchAndLearn />
    );
    userEvent.click(getByRole("button", { name: "Submit Form" }));
    expect(getAllByText("Field is required")).toHaveLength(3);
    userEvent.type(getByLabelText(FIRST_NAME_LABEL), "Ted");
    userEvent.type(getByLabelText(LAST_NAME_LABEL), "Mahoney");
    userEvent.type(getByLabelText(TOPIC_LABEL), "React unit tests");
    userEvent.click(getByRole("button", { name: "Submit Form" }));
    expect(queryByText("Field is required")).not.toBeInTheDocument();
  });

  it("submits form data when all required fields are present", () => {
    const { getByRole, getByLabelText, getByText } = render(<LunchAndLearn />);
    userEvent.type(getByLabelText(FIRST_NAME_LABEL), "Ted");
    userEvent.type(getByLabelText(LAST_NAME_LABEL), "Mahoney");
    userEvent.type(getByLabelText(TOPIC_LABEL), "React unit tests");
    userEvent.click(getByRole("button", { name: "Submit Form" }));

    const submissionResult = JSON.parse(
      getByText(/"firstName": "Ted"/).textContent
    );
    expect(submissionResult.firstName).toEqual("Ted");
    expect(submissionResult.lastName).toEqual("Mahoney");
    expect(submissionResult.topic).toEqual("React unit tests");
  });
});
