import React from "react";
import SquareComponent from "../components/square.component";
import FilledSquareView from "./filledSquare.view";

const roomView = () => {
  return (
    <div>
      <h1>Room view</h1>
      <FilledSquareView />
      <SquareComponent floorType={"dungeon-tile-1"} />
      <SquareComponent floorType={"dungeon-tile-2"} />
      <SquareComponent floorType={"dungeon-tile-3"} />
    </div>
  );
};

export default roomView;
