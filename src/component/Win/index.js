import React from 'react'
import { useParams } from 'react-router';
export const Win = () => {
    const {moves , scoer} = useParams();
    return (
        
        <div className="win">
            
             <h2>Congratulations</h2>
             <div className="scoer">
          <p>You finshed the game in :{moves} moves </p>
          <p>Your Scoer {scoer}</p>
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
