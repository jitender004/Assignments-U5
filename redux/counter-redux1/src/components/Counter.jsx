import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, reduceCounter, resetCounter } from "../redux/action";
import styles from "./style.module.css"
const Counter = () => {
  const counter = useSelector((state) =>  state.counter);
  const dispatch = useDispatch();
  const [incrementvalue,setIncrement] = useState("0");
const handleChange = (e)=>{
    setIncrement(e.target.value)

}
  return (
    <div className={styles.container}>
      Counter : {counter}
      <div>
        <button onClick={() => dispatch(addCounter(1))}>+</button>
        {/* <button onClick={() => dispatch(resetCounter(0))}>Reset</button> */}
        <button onClick={() => dispatch(reduceCounter(1))}>-</button>
      </div>
      <div className={styles.input}>
          <input type="text" value={incrementvalue} onChange={handleChange} />
          <button>Add</button>
          <button>Subtract</button>
          <button>Multiply</button>
          <button>Divide</button>
      </div>
    </div>
  );
};

export default Counter;
