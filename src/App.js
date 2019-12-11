import React from 'react';
import Card from './Card';
import Timer from'./Timer';
import './App.css';

function resetBoard()
{
  //Resets the state and props to their initial state 
}

function App() {
  return (
    <div className="App">
      <Timer/> 
      <table>
        <tr>
          <Card/> 
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
      <button onClick={() => resetBoard(/*put setState hook here*/)}> Reset </button> 
    </div>
  );
}

