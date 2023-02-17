import {useState, useEffect} from 'react'
import './App.css'

export const App = () => {
  const[time, setTime]=useState(0);
  const[isActive, setIsActive]=useState(false);
  useEffect(()=>{
    let intervalId;
    if(isActive){
      intervalId=setInterval(()=>{
        setTime(prevTime=>prevTime+1);
      }, 1000)
    }
    return()=>{
      clearInterval(intervalId)}},[isActive]
  )
  const handleStart=()=>{
    setIsActive(true);
  }
  const handleStop=()=>{
    setIsActive(false);
  }
  const handleReset=()=>{
    setTime(0);
    setIsActive(false);
  }
  return (
    <div className='container'>
      <h2>{time}</h2>
      <button onClick={handleStart} className="btn btn-primary">Start</button>
      <button onClick={handleStop} className="btn btn-success">Stop</button>
      <button onClick={handleReset} className="btn btn-danger">Reset</button>
    </div>
  )
}
export default App
