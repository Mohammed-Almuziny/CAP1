import React from 'react'
import "./style.css"

const Easy = () => {
  let cards = [{
       id : 0,
       image : 0
    },
    { 
      id : 1,
      image : 1 
    },
    {
      id : 2,
      image : 2
    },
    { id : 3,
      image : 3
    },
    {
      id : 0,
      image : 0
   },
   { 
     id : 1,
     image : 1 
   },
   {
     id : 2,
     image : 2
   },
   { id : 3,
     image : 3
   }
  ] 


  return (
    <div className="playArea">
      {cards.map((card, i) => (
        <div className="card"> {card.image} </div>
      ))}
    </div>
  )
}

export default Easy
