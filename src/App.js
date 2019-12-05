import React from 'react';
import logo from './logo.svg';
import Card from './Card';
import './App.css';

function resetBoard()
{
  //Resets the state and props to their initial state 
}

function App() {
  return (
    <div className="App">
      <h3> 0:00 </h3> {/*timer component goes here*/}
      <table>
        <tr>
          <Card/> {/*card component goes in <td> slots*/}
          <td> test </td>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
        <tr>
          <td> test </td>
          <td> test </td>
          <td> test </td>
          <td> test </td>
          <td> test </td>
        </tr>
      </table>
      <button onClick={() => resetBoard(/*put setState hook here*/)}> Reset </button> 
    </div>
  );
}

export default App;
