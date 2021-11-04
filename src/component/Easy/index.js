import React from "react";
import "./style.css";
const Easy = () => {
  let cards = [
    {
      id: 0,
      image: 0,
    },
    {
      id: 1,
      image: 1,
    },
    {
      id: 2,
      image: 2,
    },
    { id: 3, image: 3 },
    {
      id: 4,
      image: 4,
    },
    {
      id: 5,
      image: 5,
    },
    {
      id: 6,
      image: 6,
    },
    { id: 7, image: 7 },
    {
      id: 8,
      image: 8,
    },
    {
      id: 9,
      image: 9,
    },
    {
      id: 10,
      image: 10,
    },
    { id: 11, image: 11 },
    {
      id: 12,
      image: 12,
    },
    {
      id: 13,
      image: 13,
    },
    {
      id: 14,
      image: 14,
    },
    { id: 15, image: 15 },
  ];

  const fliping = (e) => {
    const target = e.currentTarget
    console.log(target);
    target.style.transform = "rotateY(180deg)"
  }
  return (
    <div className="playArea">
      {cards.map((card, i) => (
        <div className="card" key={i} onClick={(event) => fliping(event)}>
          <div className="front "> </div>
          <div className="back "> {card.image} </div>
        </div>
      ))}
    </div>
  );
};
export default Easy;
