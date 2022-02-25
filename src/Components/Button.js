
function Button (props) {

return (
    
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
      )}

      export default Button;