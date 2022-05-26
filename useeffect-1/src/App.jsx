import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
// import ShowData from './components/ShowData'
import ShowDbData from './components/ShowDbData'

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/* <ShowData /> */}
      <ShowDbData />
   
   
      {show ? <Todo /> : null}
      <button className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show?"Hide":"Show"} Todos
      </button>

      {/* <Counter /> */}
    </div>
  );
}

export default App;
