import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import "./../styles/room.css";

import FilledSquareView from "./filledSquare.view";

const roomView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [squareSettings, setSquareSettings] = useState([]);

  const API_URL = "http://localhost:5005";

  useEffect(() => {
    axios
      // .get(`${import.meta.env.VITE_API_URL}/api/map`)
      .get(`${API_URL}/api/map`)
      .then((res) => {
        setSquareSettings(res.data.squaresSettings);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <h1>Room view</h1>
      <div className="board">
        {isLoading && <h2>Still loading</h2>}
        {!isLoading &&
          squareSettings.map((setting, index) => (
            <FilledSquareView
              key={index}
              xPosition={setting.xPosition}
              yPosition={setting.yPosition}
              floorType={setting.floorType}
              squareFillingType={
                setting.squareFillingType ? setting.squareFillingType : null
              }
            />
          ))}
      </div>
    </div>
  );
};

export default roomView;
