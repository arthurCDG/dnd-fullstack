import React, { useEffect } from "react";
import axios from "axios";
import "./../styles/square.css";
import { useState } from "react";

const squareComponent = ({ floorType, children }) => {
  const [hero, setHero] = useState(null);
  const [monster, setMonster] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get(API_URL) // fetch hero at this position
  //     .then((res) => {
  //       if (res.data.length) {
  //         setHero(res.data[0]);
  //       }
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(API_URL) // fetch monster at this position
  //     .then((res) => {
  //       if (res.data.length) {
  //         setMonster(res.data[0]);
  //       }
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  const componentClasses = "square" + " " + floorType;

  return <div className={componentClasses}>{children}</div>;
};

export default squareComponent;
