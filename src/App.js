import React from 'react';
import Card from './Card';
import Timer from'./Timer';
import './App.css';
import { useState } from 'react';

const possibleIDs = [1,1,2,2,3,3,4,4,5,5];

function resetBoard()
{
  //Resets the state and props to their initial state 
}

function App() {
  const[cardState, setCardState] = useState(0); //0 unflipped, 1 flipped, 2 matched
  const[victory, setVictory] = useState(0); //0 no victory, 1 victory
  const[cardID, setCardID] = useState(0); //0 no ID 1 red 2 yellow 3 green 4 blue 5 purple
  const[timer, setTimerState] = useState(0); //0 timer off, 1 timer on
  function assignCard(cardIndex)
  {
    if(victory === 0 && cardID === 0)
    {
      var currentIndex = possibleIDs.length, temporaryValue, randomIndex;
      while (0 !== currentIndex)
      {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = possibleIDs[currentIndex];
        possibleIDs[currentIndex] = possibleIDs[randomIndex];
        possibleIDs[randomIndex] = temporaryValue;
      }
    }
    else if(victory === 0 && cardID !== 0)
    {
      
    }
  }
  return (
    <div className="App">
      <Timer/> 
      <table>
        <tr>
          <Card onClick={() => assignCard(cardState, setCardState, cardID, setCardID)}/> 
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </tr>
        <tr>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/> 
        </tr>
      </table>
      <button onClick={() => resetBoard(cardState, setCardState, cardID, setCardID, victory, setVictory)}> Reset </button> 
    </div>
  );
}

