import React from 'react'
export const Lose = () => {

    return (
        <div className="Loss">
            
             <h2>You Lost</h2>
             <div>
          <button type='button' onClick={(e) => {
              e.preventDefault();
              window.location.href='/';
          }} >Go back to Home</button>

          <button type='button' onClick={(e) => {
              e.preventDefault();
              window.location.href='/Easy';
          }} >Play Easy </button>
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
export default Lose;
