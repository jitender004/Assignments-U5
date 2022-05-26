import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [page,setPage]  = useState(1);

  useEffect(() => {
      // console.log("Mounted state")
    getdata();
    
    // unmounted phase
    return function(){
        // console.log("Unmounted state")
    };
  }, [page]);

  const getdata = async () => {
    const data = await fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`).then((d) =>
      d.json()
    );
    setTodo(data);
    // setText("");
  };

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        name="todo"
        placeholder="Enter todo here"
      />
      <button
        onClick={() => {
          const payload = {
            title: text,
            status: false,
          };
          fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then(()=>{
              getdata();
              // setText("");
          })
        }}
      >
        ADD TODO
      </button>
      {todo.map((e) => (
        <div key={e.id}>
          <h2>{e.id}. {e.title}</h2>
        </div>
      ))}
      <button onClick={()=>{setPage(page-1)}}>PREVIOUS</button>
      <button onClick={()=>{setPage(page+1)}}>NEXT</button>
    </div>
  );
};

export default Todo;
