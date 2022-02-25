import { useState } from "react";

export default function TodoAdder({ setToDos }) {
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setToDos((currentToDos) => {
      return [newTodo, ...currentToDos];
    });
    setNewTodo("");
  };
}
