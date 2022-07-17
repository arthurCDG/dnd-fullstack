import React from "react";
import { useState } from "react";

import SquareComponent from "../components/square.component";
import SquareFillingComponent from "../components/squareFilling.component";

const filledSquareView = ({ floorType, squareFillingType }) => {
  const [currentSquareFilling, setCurrentSquareFilling] =
    useState(squareFillingType);

  const moveHero = () => setCurrentSquareFilling("fighter");

  return (
    <div onClick={moveHero}>
      <SquareComponent floorType={floorType}>
        <SquareFillingComponent squareFillingType={currentSquareFilling} />
      </SquareComponent>
    </div>
  );
};

export default filledSquareView;
