import "./Switch.scss";

import React from "react";

const Switch = () => {
  return (
    <label className="switch">
      <input className="switch__checkbox" type="checkbox" />
      <span className="switch__handle"></span>
    </label>
  );
};

export default Switch;
