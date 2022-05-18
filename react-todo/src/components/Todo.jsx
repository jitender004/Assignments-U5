import React, { useState } from "react";
import TaskItem from "./TaskItem";
// import TodoList from './TodoList';

//read input
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTodo(e.target.value);
  };

  const handleClick = () => {
    const payload = {
      title: todo,
      status: false,
    };
    const newTask = [...task, payload];
    setTask(newTask);
    setTodo("");
  };

  return (
    <>
      <div>
        <h1>Todo-App</h1>
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Add Something here!"
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <div>
        {task.map((item) => {
          return <TaskItem id={item.id} title={item.title} />;
        })}
      </div>
    </>
  );
};

export default Todo;
