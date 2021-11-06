import React from 'react'
import moves from '../Easy'
import setscoer from '../Easy'
export const Win = () => {

    return (
        <div className="win">
            
             <h2>Congratulations</h2>
             <div className="scoer">
          <p>You finshed the game in :{moves} moves </p>
          <p>Your Scoer :{setscoer}</p>
          <button type='button' onClick={(e) => {
              e.preventDefault();
              window.location.href='/';
          }} >Go back to Home</button>

          <button type='button' onClick={(e) => {
              e.preventDefault();
              window.location.href='/Easy';
          }} >Play Easy</button>
           <button type='button' onClick={(e) => {
              e.preventDefault();
              window.location.href='/Medim';
          }} >Play Medim </button>
          <button type='button' onClick={(e) => {
              e.preventDefault();
              window.location.href='/Hard';
          }} >Play Hard </button>

          

          </div>
        </div>
    )
}
export default Win;
