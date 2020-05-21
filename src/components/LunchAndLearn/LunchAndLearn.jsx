import React from "react";
import "./LunchAndLearn.css";
import TextField from "../TextField/TextField";

const LunchAndLearn = () => {
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    topic: "",
  });
  const [submissionResult, setSubmissionResult] = React.useState(null);
  const [formErrors, setFormErrors] = React.useState({});

  const handleChange = (fieldName) => (event) => {
    setFormValues({
      ...formValues,
      [fieldName]: event.target.value,
    });
  };

  const requiredFieldNames = ["firstName", "lastName", "topic"];

  const onSubmit = (event) => {
    event.preventDefault();
    const newFormErrors = requiredFieldNames.reduce((aggregator, fieldName) => {
      const isRequiredViolation =
        formValues[fieldName] === "" ||
        formValues[fieldName] === null ||
        formValues[fieldName] === undefined;

      return {
        ...aggregator,
        [fieldName]: isRequiredViolation ? "Field is required" : null,
      };
    }, {});
    setFormErrors(newFormErrors);
    setSubmissionResult(formValues);
  };
  return (
    <div className="LunchAndLearn">
      <h1>Lunch and Learn Form!</h1>
      <form onSubmit={onSubmit}>
        <TextField
          label="First Name"
          value={formValues.firstName}
          onChange={handleChange("firstName")}
          error={formErrors.firstName}
        />
        <TextField
          label="Last Name"
          value={formValues.lastName}
          onChange={handleChange("lastName")}
          error={formErrors.lastName}
        />
        <TextField
          label="Topic"
          value={formValues.topic}
          onChange={handleChange("topic")}
          error={formErrors.topic}
        />
        <button type="submit">Submit Form</button>
      </form>
      {submissionResult && (
        <pre>{JSON.stringify(submissionResult, null, 2)}</pre>
      )}
    </div>
  );
};

export default LunchAndLearn;
