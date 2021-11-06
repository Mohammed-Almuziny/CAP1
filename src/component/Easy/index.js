import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CountDown from "../CountDown";
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
import backImg from "../../img/back.png";

// const CountDown2 = ({ minutes = 0, seconds = 0 }) => {
//   const [over, setOver] = React.useState(false);
//   const [[m, s], setTime] = React.useState([minutes, seconds]);
//   const tick = () => {
//     if (m === 0 && s === 0) setOver(true);
//     else if (s == 0) {
//       setTime([m - 1, 59]);
//     } else {
//       setTime([m, s - 1]);
//     }
//   };
//   const reset = () => {
//     setTime([parseInt(minutes), parseInt(seconds)]);
//     setOver(false);
//   };
//   React.useEffect(() => {
//     const timerID = setInterval(() => tick(), 1000);
//     return () => clearInterval(timerID);
//   });
//   return (
//     <div>
//       <p>{`${m.toString().padStart(2, "0")}:${s
//         .toString()
//         .padStart(2, "0")}`}</p>
//       <div>{over ? "Time's up!" : ""}</div>
//     </div>
//   );
// };
const Easy = () => {
  const [moves, setMoves] = useState(0);
  const [scoer, setscoer] = useState(0);
  const [firstCard, setFirstCard] = useState(-1);
  const [secondCard, setSecondCard] = useState(-1);
  const [cards, setCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const history = useHistory();

  const random = () => {
    let addedCard = [
      {
        id: 0,
        image: <img src={imgA} />,
      },
      {
        id: 1,
        image: <img src={imgJ} />,
      },
      {
        id: 2,
        image: <img src={img10} />,
      },
      {
        id: 3,
        image: <img src={img8} />,
      },
      {
        id: 4,
        image: <img src={img7} />,
      },
      {
        id: 5,
        image: <img src={img6} />,
      },
    ];
    setCards([...addedCard, ...addedCard].sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    random();
  }, []);

  useEffect(() => {
    if (firstCard === -1) {
    } else {
      setMoves(moves + 1);
    }
  }, [firstCard]);

  useEffect(() => {
    if (secondCard === -1) {
    } else {
      setMoves(moves + 1);
      setTimeout(() => {
        if (cards[firstCard].image === cards[secondCard].image) {
          setMatchedCards([...matchedCards, firstCard, secondCard]);
          setscoer((scoer) => scoer + 10);
        }
        setFirstCard(-1);
        setSecondCard(-1);
      }, 2000);
    }
  }, [secondCard]);

  useEffect(() => {
    if (matchedCards.length === 12) {
      alert("you win");
      history.push("/");
    }
  }, [matchedCards]);

  const fliping = (e, index) => {
    if (firstCard === index) {
    } else if (firstCard === -1) {
      setFirstCard(index);
    } else if (secondCard === -1) {
      setSecondCard(index);

      // setTimeout(() => {
      //   console.log(secondCard);
      //   // if (cards[1].image === cards[1].image) {
      //   //   alert("mach");

      //   //   setFirstCard(-1);
      //   //   setSecondCard(-1);

      //   // } else {
      //   //   setFirstCard(-1);
      //   //   setSecondCard(-1);
      //   // }
      //   setFirstCard(-1);
      //   setSecondCard(-1);
      // }, 2000);
    } else {
    }
    //   if (firstTarget) {
    //     console.log("first");

    //     setFirstTarget(e.currentTarget);

    //     // firstTarget.style.transform = "rotateY(180deg)";

    //   } else {
    //     setmoves((moves) => moves + 1);
    //     target.push(e.currentTarget);

    //     console.log("new target", +target);
    //     // target[1].style.transform = "rotateY(180deg)";

    //     setTimeout(() => {
    //       if (firstCard) {
    //         console.log("id equ");
    //         target[0].style.visibility = "hidden";
    //         target[1].style.visibility = "hidden";
    //         target = [];
    //         setscoer((scoer) => scoer + 10);
    //       } else {
    //         console.log("id not equ");
    //         target[0].style.transform = "rotateY(0deg)";
    //         target[1].style.transform = "rotateY(0deg)";
    //         target = [];
    //       }
    //     }, 2000);
    //   }
    // } else {
    // }
    // if (firstTarget === undefined) {
    //   firstTarget = i;
    //   console.log();
    // }
    // if (target.style.transform === "rotateY(180deg)") {
    //   target.style.transform = "rotateY(0deg)";
    // } else {
    //   target.style.transform = "rotateY(180deg)";
    // }
  };

  const isFliped = (index) => {
    if (index === firstCard) {
      return true;
    }
    if (index === secondCard) {
      return true;
    }
  };

  const isMatched = (index) => {
    let findCard = matchedCards.find((card) => {
      if (index === card) return true;
    });

    if (findCard !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="playArea">
      {cards.map((card, i) => (
        <div
          className={
            "card " +
            (isFliped(i) ? "fliped" : "") +
            (isMatched(i) ? "matched" : "")
          }
          key={i}
          transform={isFliped(i) === true ? "rotateY(180deg)" : "rotateY(odeg)"}
          // rotateY={}
          onClick={(event) => fliping(event, i)}
        >
          <div className="  back">
            {" "}
            <img src={backImg} />{" "}
          </div>
          <div className="  front"> {card.image} </div>
        </div>
      ))}
      <p>Moves: {moves}</p>
      <p>scoer: {scoer} </p>
      {/* <p>{time}</p> */}
      <CountDown minutes={0} seconds={5} />
    </div>
  );
};
export default Easy;
