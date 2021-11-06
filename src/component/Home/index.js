import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="homeMain">
      <h1 className="title">Flip Card Game</h1>

      <div className="links">
        <Link to="/easy" className="link">
          easy
        </Link>
        <Link to="/medim" className="link">
          madim
        </Link>
        <Link to="/hard" className="link">
          hard
        </Link>
        <Link to="/instructions" className="link">
        instructions
        </Link>
      </div>
    </div>
  );
};

export default Home;
