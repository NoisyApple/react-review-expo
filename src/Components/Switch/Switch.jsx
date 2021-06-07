import "./Switch.scss";

import React from "react";

const Switch = ({ onChange }) => {
  const handleOnChange = () => {
    if (onChange) {
      onChange();
    }
  };

  return (
    <label className="switch">
      <input
        onChange={handleOnChange}
        className="switch__checkbox"
        type="checkbox"
      />
      <span className="switch__handle"></span>
    </label>
  );
};

export default Switch;
