import "./App.css";
import { useState } from "react";

function App() { //return value injects into the <div id="root"></div> on index.html
  const [toDos, setToDos] = useState([ //mounted state of toDos array
    "build a to do list",
    "get confused",
    "push to git",
  ]);

  console.log(toDos); //confirms toDos array has been updated

  return (
    <div className="App">
      <h1>Richard and Harrison's To-Do List </h1>  {/* could be extracted into its own component */}

      <fieldset> {/* could be extracted into its own component */}
        <ul>
          {toDos.map((toDo, index) => {
            return (
              <li key={`${toDo}-${index}`} className="card"> {/* use index to assign a unique key as no id available */}
                <p>{toDo}</p>
              </li>
            );
          })}
        </ul>
      </fieldset>
      <input id="add-todo" placeholder="Enter a to-do here"></input>
      <button
        onClick={() => {
          console.log("clicked"); //confirms successful click
          setToDos((currentToDos) => { //setToDos function sets the new state of toDos array
            const newToDos = [...currentToDos]; //must not mutate the current state so spread value into new state variable.
            newToDos.push("hello");
            return newToDos; //return value of setToDos = new state of toDos
          });
        }}
      >
        Add Todo
      </button> {/* button component could be extracted */}
    </div>
  );
}

export default App;
