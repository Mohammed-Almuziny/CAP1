import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const CountDown = ({ minutes = 0, seconds = 0 }) => {
  const [over, setOver] = useState(false);
  const [[m, s], setTime] = useState([minutes, seconds]);
  const history = useHistory();

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  const tick = () => {
    if (m === 0 && s === 0) {
      setOver(true);
      alert("time out");
      history.push("/");

    } else if (s === 0) {
      setTime([m - 1, 59]);
    
    } else {
      setTime([m, s - 1]);
    }
  };

  // const reset = () => {
  //   setTime([parseInt(minutes), parseInt(seconds)]);
  //   setOver(false);
  // };

  return (
    <div>
      <p>{`${m.toString().padStart(2, "0")}:${s
        .toString()
        .padStart(2, "0")}`}</p>
      <div>{over ? "Time's up!" : ""}</div>
    </div>
  );
};

export default CountDown;
