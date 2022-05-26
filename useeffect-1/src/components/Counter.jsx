import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setInterval(() => {
        // console.log(count)
     const id= setCount((prevValue) => {
          if(prevValue<=0){
              return clearInterval(id);
          }
        return prevValue - 1;
      });
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default Counter;
