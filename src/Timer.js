import React, { useState, useEffect} from 'react';


function Timer (props){


  var timerStyle = {
  fontSize: "2.5em",
  color: "red",
  marginBottom: "25px",
  fontFamily: "Courier New"

};

  return (
    <div>
      <div style={timerStyle}> {props.currentTime}s </div>
    </div>
  )
}

export default Timer; 


