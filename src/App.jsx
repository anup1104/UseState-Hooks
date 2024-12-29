import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1);
  const add  = ()=>{
   if(counter <= 19) setCounter(counter + 1);
   else alert("Excedded the count")
 }
 const remove = ()=>{
 if(counter >= 1) setCounter(counter - 1);
 else alert("Excedded the count")
 }
 const Style = {display:'flex',justifyContent:'space-around'};
  return (
    <>
      <h1>Hi, we are starting Hooks: {counter}</h1>
      <div style={Style}>

      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      </div>
    </>
  )
}

export default App
