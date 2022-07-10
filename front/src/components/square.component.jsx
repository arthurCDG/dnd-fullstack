import React from "react";
import "./../styles/square.css";

const squareComponent = ({ floorType, children }) => {
  const componentClasses = "square" + " " + floorType;

  return <div className={componentClasses}>{children}</div>;
};

export default squareComponent;
