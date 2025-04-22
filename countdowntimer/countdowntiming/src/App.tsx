import React, { useState, useEffect } from 'react'
import './App.css'
import './index.css';
import Button from './components/Button'


function App() {
  const [time, setTime] = useState(new Date())
  const [inputVal, setInputVal]=useState("")
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning]=useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setInputVal(event.target.value);
  }
  const handleStart = ()=>{
    setTimer(Number(inputVal)*60);
    setIsRunning(true);
  }
  const handleStop = ()=>{
    setIsRunning(false);
  }
  const handleReset = ()=>{
    setIsRunning(false);
    setTimer(Number(inputVal)*60);
  }


  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    let interval: number;

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRunning(false); // Stop timer when it reaches 0
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timer]);

  const minutes = Math.floor(timer / 60); // Calculate minutes
  const seconds = timer % 60;

  return (
    <>
    <h1>{time.toDateString()}</h1>
    <h3>{time.toLocaleTimeString()}</h3>
    <div className="buttons">
      <Button name="Start" onClick={handleStart}/>
      <Button name="Stop" onClick={handleStop}/>
      <Button name="Reset" onClick={handleReset}/>
    </div>
    <input type="number" value={inputVal} onChange={handleInputChange} placeholder="Num of minutes"/>
    <div className="number">
      <h4>
        Timer: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h4>
    </div>
    {timer==1 && <h4>Congrats Youre Done</h4>}
    </>
  )
}

export default App;
