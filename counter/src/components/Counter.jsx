import React, { useState } from 'react'
// import '../App.css'
const Counter = ({initialValue}) => {
    const [count,setCount] = useState(initialValue);
    const handleIncrement = ()=>{
      setCount(count+1);
    }
  return(
    <>
      <h2 className={count === 0 ? "black" : count % 2 === 0 ? "green" : "red"}>COUNTER:   {count}</h2>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={()=>setCount(count-1)}>DECREMENT</button>
      <button onClick={()=>setCount(count*2)}>DOUBLE</button>
    </>
  )
}

export default Counter
