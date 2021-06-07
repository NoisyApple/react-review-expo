import "./Switch.scss";

import React from "react";

const Switch = ({ onChange }) => {
  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label className="switch">
      <input
        onChange={(e) => handleOnChange(e)}
        className="switch__checkbox"
        type="checkbox"
      />
      <span className="switch__handle"></span>
    </label>
  );
};

export default Switch;
