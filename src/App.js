import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([
    "build a to do list",
    "get confused",
    "push to git",
  ]);

  return (
    <div className="App">
      <h1>Richard and Harrison's Todo List </h1>

      <fieldset>
        <ul>
          {toDos.map((toDo, index) => {
            return (
              <li key={`${toDo}-${index}`} className="card">
                <p>{toDo}</p>
              </li>
            );
          })}
        </ul>
      </fieldset>
      <input id="add-todo" placeholder="Enter a todo here"></input>
      <button
        onClick={() => {
          console.log("clicked");
          setToDos((junk) => {
            const newToDos = [...junk];
            newToDos.push("hello");
            return newToDos;
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default App;
