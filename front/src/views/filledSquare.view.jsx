import React from "react";

import SquareComponent from "../components/square.component";
import SquareFillingComponent from "../components/squareFilling.component";

const filledSquareView = () => {
  return (
    <div>
      <SquareComponent floorType={"dungeon-tile-2"}>
        <SquareFillingComponent squareFillingType={"fighter"} />
      </SquareComponent>
    </div>
  );
};

export default filledSquareView;
