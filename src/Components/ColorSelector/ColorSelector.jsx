import "./ColorSelector.scss";

import React, { useEffect, useState } from "react";

import { SELECTOR_COLORS } from "../../Constants";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { setSelectorColor } from "../../Store/colorSelectorSlice";

const ColorSelector = () => {
  const [color, setColor] = useState(SELECTOR_COLORS[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectorColor(color));
  }, []);

  const handleClick = (c) => {
    setColor(c);
    dispatch(setSelectorColor(c));
  };

  return (
    <div className="color-selector">
      {SELECTOR_COLORS.map((c) => {
        return (
          <Button
            className={`color-selector__button ${
              c === color ? "is-selected" : ""
            }`}
            key={c}
            color={c}
            onClick={() => handleClick(c)}
          ></Button>
        );
      })}
    </div>
  );
};

export default ColorSelector;
