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

const Hard = () => {
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
        image: <img src={imgA} alt="" />,
      },
      {
        id: 1,
        image: <img src={imgJ} alt="" />,
      },
      {
        id: 2,
        image: <img src={imgQ} alt="" />,
      },
      {
        id: 3,
        image: <img src={imgK} alt="" />,
      },
      {
        id: 4,
        image: <img src={img10} alt="" />,
      },
      {
        id: 5,
        image: <img src={img9} alt="" />,
      },
      {
        id: 6,
        image: <img src={img8} alt="" />,
      },
      {
        id: 7,
        image: <img src={img7} alt="" />,
      },
      {
        id: 8,
        image: <img src={img6} alt="" />,
      },
      {
        id: 9,
        image: <img src={img5} alt="" />,
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
    // eslint-disable-next-line
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
    // eslint-disable-next-line
  }, [secondCard]);

  useEffect(() => {
    if (matchedCards.length === 20) {
      history.push(`/Win/${moves}/${scoer}`);
    }
    // eslint-disable-next-line
  }, [matchedCards]);

  const fliping = (e, index) => {
    if (firstCard === index) {
    } else if (firstCard === -1) {
      setFirstCard(index);
    } else if (secondCard === -1) {
      setSecondCard(index);
    } else {
    }
  };

  const isFliped = (index) => {
    if (index === firstCard) {
      return true;
    }
    if (index === secondCard) {
      return true;
    }
    // eslint-disable-next-line
  };

  const isMatched = (index) => {
    // eslint-disable-next-line
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
          onClick={(event) => fliping(event, i)}
        >
          <div className="  back">
            {" "}
            <img src={backImg} alt="" />{" "}
          </div>
          <div className="  front"> {card.image} </div>
        </div>
      ))}
      <p>Moves: {moves}</p>
      <p>scoer: {scoer} </p>
      <CountDown minutes={1} seconds={30} />
    </div>
  );
};
export default Hard;
