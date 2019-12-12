import React from 'react';
import Card from './Card';
import Timer from'./Timer';
import './App.css';
import { useState, useEffect } from 'react';
import _ from 'lodash'; //lodash library gives you many useful commands

const possibleCards = //object of possible cards
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

function resetBoard(setCards, setTimerOn) //stops timer and shuffles deck
{
  setCards(shuffleCards());
  setTimerOn(false);
}

function shuffleCards() //shuffles deck
{
  return _.cloneDeep(_.shuffle(possibleCards)); //clones the object so original remains in tact
}

function flipCard(cardId, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)
{
  if(!canClick) //makes it so users can't click on cards when cards are already flipped
  {
    return;
  }
  if(timerOn === false) //starts the timer if timer is not on
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
    if(!cards[cardId].flipped) //makes sure you aren't clicking a card that has already been clicked
    {
      cards[cardId].flipped = true; //flip second card
      if(cards[cardId].color === previousCard.color) //if they have the same color set match to true
      {
        cards[cardId].matched = true; 
        previousCard.matched = true;
        setCards([...cards]);
        if(_.every(cards, {matched:true})) //if all cards are matched
        {
          setVictory(currentTime); //set highscore
          setTimerOn(false); //stop timer
        }
      }
      else //wait then set match to false
      {
        setCanClick(false); //make it so users can't click until timer is over
        setCards([...cards]);
        setTimeout(() => {
          setCanClick(true); //make it so users can click again
          cards[cardId].flipped = false; //unflip
          previousCard.flipped = false;
          setCards([...cards]);
        }, 1000);
      }
    }
  }
}

function VictoryTime(props) //mini component that displays the high score
{
  if(props.time !== 0 )
  {
    return(
      <p> your most recent score is {props.time} seconds!</p>
    );
  }
  else
  {
    return(
      <p></p>
    )
  }
}

function App() {
  const[cards, setCards] = useState(shuffleCards()); //The deck of cards and it's values
  const[victory, setVictory] = useState(0);  // High score time
  const[timerOn, setTimerOn] = useState(false); // timer on/off
  const[canClick, setCanClick] = useState(true); // can interact with board on/off
  const [currentTime, setCurrentTime] = useState(0); // timer value
  const [timer, setTimer] = useState(null);// timer display
  useEffect(() => {    //Israel's code
    if (timerOn && !timer) 
    {
      setTimer( setInterval(() => {
        setCurrentTime(currentTime => currentTime + 1);
      }, 1000));
    } 
    else if (!timerOn && currentTime !== 0) 
    {
      clearInterval(timer);
      setCurrentTime(0);
      setTimer(null);
    }
  });
  return ( //JSX below
    <div className="App">
      <Timer currentTime = {currentTime}/> 
      <table>
        <tr>
          <Card card = {cards[0]} onClick={() => flipCard(0, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/> 
          <Card card = {cards[1]} onClick={() => flipCard(1, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
          <Card card = {cards[2]} onClick={() => flipCard(2, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
          <Card card = {cards[3]} onClick={() => flipCard(3, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
          <Card card = {cards[4]} onClick={() => flipCard(4, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
        </tr>
        <tr>
          <Card card = {cards[5]} onClick={() => flipCard(5, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
          <Card card = {cards[6]} onClick={() => flipCard(6, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
          <Card card = {cards[7]} onClick={() => flipCard(7, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
          <Card card = {cards[8]} onClick={() => flipCard(8, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/>
          <Card card = {cards[9]} onClick={() => flipCard(9, cards, setCards, timerOn, setTimerOn, canClick, setCanClick, currentTime, setVictory)}/> 
        </tr>
      </table>
      <button onClick={() => resetBoard(setCards, setTimerOn)}> Reset </button> 
      <VictoryTime time = {victory}/>
    </div>
  );
}

export default App;
