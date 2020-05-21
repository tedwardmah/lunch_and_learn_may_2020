import React from "react";

const TextField = (props) => {
  const { label, value, onChange, error } = props;
  return (
    <div style={{ marginBottom: "16px" }}>
      <label>
        {label}
        <input type="text" value={value} onChange={onChange} required />
      </label>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default TextField;
