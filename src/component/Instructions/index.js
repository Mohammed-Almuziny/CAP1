import React from 'react'

const Instructions = () => {
    return (
        <div>
            <h1>Instructions</h1>
            <p> choose two cards at a time and try to find two cards that are exactly the same.<br/>
             If they find two cards that match then they remove the cards from the screen
             you must match ali the cards befor the time end to win 
            </p>
            <button type='button' onClick={(e) => {
              e.preventDefault();
              window.location.href='/';
          }} >Go back to Home</button>
        </div>
    )
}

export default Instructions
