import React from 'react';
import Card from './Card';
import Timer from'./Timer';
import './App.css';
import { useState } from 'react';
import _ from 'lodash';

const possibleCards = 
[
  { color : 'red', flipped: false, matched:false},
  { color : 'red', flipped: false, matched:false},
  { color : 'yellow', flipped: false, matched:false },
  { color : 'yellow', flipped: false, matched:false },
  { color : 'blue', flipped: false, matched:false },
  { color : 'blue', flipped: false, matched:false },
  { color : 'green', flipped: false, matched:false },
  { color : 'green', flipped: false, matched:false },
  { color : 'orange', flipped: false, matched:false },
  { color : 'orange', flipped: false, matched:false }
]

function resetBoard()
{
  return _.cloneDeep(_.shuffle(possibleCards)); //clones the object so original remains in tact
}

function flipCard(cardId, cards, setCards, timerOn, setTimerOn)
{
  var i;
  if(timerOn === false)
  {
    setTimerOn(true);
  }
  let previousCard = _.find(cards, {flipped:true, matched:false}); //finds card that is flipped and unmatched
  if(!previousCard) //if no card is flipped
  {
    cards[cardId].flipped = true; //flip first card
    previousCard = cards[cardId];
    setCards([...cards]); //setState
  }
  else //if flip card is found
  {
    console.log("test 1");
    cards[cardId].flipped = true; //flip second card
    if(cards[cardId].color === previousCard.color) //if they have the same color set match to true
    {
      cards[cardId].matched = true; 
      previousCard.matched = true;
      setCards([...cards]);
    }
    else //wait then set match to false
    {
      setCards([...cards]);
      setTimeout(() => {
        cards[cardId].flipped = false;
        previousCard.flipped = false;
        setCards([...cards]);
      }, 1000);
    }
  }
}


function App() {
  const[cards, setCards] = useState(resetBoard()); 
  const[victory, setVictory] = useState(false); //0 no victory, 1 victory
  const[timerOn, setTimerOn] = useState(false); //0 timer off, 1 timer on
  return (
    <div className="App">
      <Timer props = {timerOn}/> 
      <table>
        <tr>
          <Card card = {cards[0]} onClick={() => flipCard(0, cards, setCards, timerOn, setTimerOn)}/> 
          <Card card = {cards[1]} onClick={() => flipCard(1, cards, setCards, timerOn, setTimerOn)}/>
          <Card card = {cards[2]} onClick={() => flipCard(2, cards, setCards, timerOn, setTimerOn)}/>
          <Card card = {cards[3]} onClick={() => flipCard(3, cards, setCards, timerOn, setTimerOn)}/>
          <Card card = {cards[4]} onClick={() => flipCard(4, cards, setCards, timerOn, setTimerOn)}/>
        </tr>
        <tr>
          <Card card = {cards[5]} onClick={() => flipCard(5, cards, setCards, timerOn, setTimerOn)}/>
          <Card card = {cards[6]} onClick={() => flipCard(6, cards, setCards, timerOn, setTimerOn)}/>
          <Card card = {cards[7]} onClick={() => flipCard(7, cards, setCards, timerOn, setTimerOn)}/>
          <Card card = {cards[8]} onClick={() => flipCard(8, cards, setCards, timerOn, setTimerOn)}/>
          <Card card = {cards[9]} onClick={() => flipCard(9, cards, setCards, timerOn, setTimerOn)}/> 
        </tr>
      </table>
      <button onClick={() => setCards(resetBoard())}> Reset </button> 
    </div>
  );
}

export default App;
