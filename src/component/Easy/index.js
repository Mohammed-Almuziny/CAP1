import React from "react";
import "./style.css";
import imgA from "../../img/A.png";
import imgK from "../../img/K.png";
import imgJ from "../../img/J.png";
import imgQ from "../../img/Q.png";
import img10 from "../../img/10.png";
import img9 from "../../img/9.png";
import img8 from "../../img/8.png";
import img7 from "../../img/7.png";
import img6 from "../../img/6.png";
import img5 from "../../img/5.png";
import backImg from "../../img/back.png"
const Easy = () => {
  let cards = [
    {
      id: 0,
      image: <img src={imgA} />,
    },
    {
      id: 1,
      image: <img src={imgA} />,
    },
    {
      id: 2,
      image: <img src={imgJ} />,
    },
    { id: 3, image: <img src={imgJ} /> },
    {
      id: 4,
      image: <img src={img10} />,
    },
    {
      id: 5,
      image: <img src={img10} />,
    },
    {
      id: 6,
      image: <img src={img8} />,
    },
    { id: 7, image: <img src={img8} /> },
    {
      id: 8,
      image: <img src={img7} />,
    },
    {
      id: 9,
      image: <img src={img7} />,
    },
    {
      id: 10,
      image: <img src={img6} />,
    },
    { id: 11, image: <img src={img6} /> },
  ];

  const fliping = (e) => {
    const target = e.currentTarget;
    console.log(target);
    if (target.style.transform === "rotateY(180deg)") {
      target.style.transform = "rotateY(0deg)";
    } else {
      target.style.transform = "rotateY(180deg)";
    }
  };
  return (
    <div className="playArea">
      {cards.map((card, i) => (
        <div className="card" key={i} onClick={(event) => fliping(event)}>
          <div className="  back"> <img src={backImg} />  </div>
          <div className="  front"> {card.image} </div>
        </div>
      ))}
    </div>
  );
};
export default Easy;
