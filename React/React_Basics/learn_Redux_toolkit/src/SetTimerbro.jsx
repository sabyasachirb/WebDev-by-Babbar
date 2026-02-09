import React, { useRef, useState } from 'react'


const SetTimerbro = () => {
  const [time, setTimer] = useState(0);
  const timerref = useRef(null);


    function startTimer(){
      if(timerref.current) return;
        timerref.current = setInterval(()=> {
            setTimer( time=> time+1)   
        },1000);

    }
    function stopTimer(){
      clearInterval(timerref.current);
      timerref.current = null; 
    }
    function resetTimer(){
      clearInterval(timerref.current);
      timerref.current = null; 
      setTimer(0);
    }
  return (
    <div>
      <p>Set Timer</p>
      <button onClick={startTimer}>Start {time}</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default SetTimerbro

