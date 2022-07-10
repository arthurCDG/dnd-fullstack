import React from "react";
import "./../styles/square-filling.css";

const squareFillingComponent = ({ squareFillingType }) => {
  const componentClasses = "square" + " " + squareFillingType;

  return <div className={componentClasses}></div>;
};

export default squareFillingComponent;
