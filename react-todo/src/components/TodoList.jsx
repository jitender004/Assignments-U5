import React, { useState } from 'react'

const TodoList = () => {
    const [query,setQuery] = useState([]);
    const handleClick = ()=>{
        
    }
  return (
    <div>
         <button onClick={handleClick} >Add</button> 
    </div>
  )
}

export default TodoList
