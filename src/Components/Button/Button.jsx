import "./Button.scss";

import React from "react";

const Button = ({ children, color = "#33333388", className }) => {
  return (
    <button style={{ background: color }} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
