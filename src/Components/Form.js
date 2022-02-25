export default function Form({ toDos, setNewTodo, newTodo, setToDos }) {
  return (
    <section>
      <form
      // onSubmit={() => {
      //   setNewTodo(currentToDos);
      //   const newToDo = [newToDo, ...currentToDos];
      // }}
      >
        <fieldset>
          {/* could be extracted into its own component */}
          <ul>
            {toDos.map((toDo, index) => {
              return (
                <li key={`${toDo}-${index}`} className="card">
                  {/* use index to assign a unique key as no id available */}
                  <p>{toDo}</p>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <input
          id="add-todo"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
      </form>
      <button
        onClick={() => {
          console.log("clicked"); //confirms successful click
          setToDos((currentToDos) => {
            //setToDos function sets the new state of toDos array
            const newToDos = [...currentToDos]; //must not mutate the current state so spread value into new state variable.
            newToDos.push(newTodo);
            // newToDos.push("hello");
            return newToDos; //return value of setToDos = new state of toDos
          });
          setNewTodo("");
        }}
      >
        Add To-do
      </button>
    </section>
  );
}
