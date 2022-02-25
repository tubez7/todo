import "./App.css";
import { useState } from "react";
import Header from "./Components/Header.js";
import TodoList from "./Components/TodoList";
import TodoAdder from "./Components/TodoAdder";
import Form from "./Components/Form";

function App() {
  //return value injects into the <div id="root"></div> on index.html
  const [toDos, setToDos] = useState([
    //mounted state of toDos array
    "build a to do list",
    "get confused",
    "push to git",
  ]);
  const [newTodo, setNewTodo] = useState("");
  console.log(toDos); //confirms toDos array has been updated

  return (
    <div className="App">
      <Header />
      {/* extracted into  its own component */}
      <Form
        toDos={toDos}
        setNewTodo={setNewTodo}
        newTodo={newTodo}
        setToDos={setToDos}
      />
      {/* button component could be extracted */}
    </div>
  );
}

export default App;
