export default function TodoList(props) {
  return (
    <form onSubmit={handleSubmit}>
      {" "}
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
      <input id="add-todo" placeholder="Enter a to-do here"></input>
    </form>
  );
}