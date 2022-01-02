import React from "react";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";

ColorBox.propTypes = {};
function randomColor() {
  const colorList = ["deeppink", "green", "yellow", "black", "blue"];
  let index = Math.trunc(Math.random() * 5);
  return colorList[index];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initcolordefault = localStorage.getItem("color") || "deeppink";
    return initcolordefault;
  });
  function changeColor() {
    const initcolor = randomColor();
    setColor(initcolor);
    localStorage.setItem("color", initcolor);
  }
  return (
    <div>
      <div className="box" style={{ background: color }} onClick={changeColor}>
        Color
      </div>
    </div>
  );
}

export default ColorBox;
