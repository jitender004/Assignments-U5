import React, {useState} from 'react'
import TodoList from './TodoList';
//read input
const Todo = () => {
    const [todo,setTodo] = useState("");
    const handleChange = (e)=>{
    //    console.log(e.target.value);
       setTodo(e.target.value);
    }
    
  return (
    <div>
        <input onChange={handleChange} value={todo} type="text" placeholder='Write Something' />   
         <TodoList />
    </div>
  )
}

export default Todo
