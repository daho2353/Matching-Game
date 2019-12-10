import React, { useState, useEffect, useRef } from 'react';


function Timer (props){
const [currentTime, setCurrentTime] = useState(0);
const [isActive, setIsActive] = useState(false);

	if (props.startTimer == true){
   	setIsActive = true;
   }

   if (props.stopTimer == true){

   	setIsActive = false;
   }

  



  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setCurrentTime(currentTime => currentTime + 1);
      }, 1000);
    } else if (!isActive && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, currentTime]);



  return (
    <div>
      <div> {currentTime}s </div>
    </div>
  )
	

}

export default Timer; 


