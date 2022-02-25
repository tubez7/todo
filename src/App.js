import "./App.css";
import { useState } from "react";
import Header from "./Components/Header.js";
import TodoList from "./Components/TodoList";
import TodoAdder from "./Components/TodoAdder";

function App() {
  //return value injects into the <div id="root"></div> on index.html
  const [toDos, setToDos] = useState([
    //mounted state of toDos array
    "build a to do list",
    "get confused",
    "push to git",
  ]);

  console.log(toDos); //confirms toDos array has been updated

  return (
    <div className="App">
      <Header />
      {/* extracted into  its own component */}
      <TodoList />
      <TodoAdder />

      <input id="add-todo" placeholder="Enter a to-do here"></input>
      <button
        onClick={() => {
          console.log("clicked"); //confirms successful click
          setToDos((currentToDos) => {
            //setToDos function sets the new state of toDos array
            const newToDos = [...currentToDos]; //must not mutate the current state so spread value into new state variable.
            newToDos.push("hello");
            return newToDos; //return value of setToDos = new state of toDos
          });
        }}
      >
        Add To-do
      </button>
      {/* button component could be extracted */}
    </div>
  );
}

export default App;
