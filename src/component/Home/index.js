import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Flip Card Game</h1>

      <Link to="/easy" className="link">easy</Link>
      <Link to="/medim" className="link">madim</Link>
      <Link to="/hard" className="link">hard</Link>

    </div>
  )
}

export default Home
