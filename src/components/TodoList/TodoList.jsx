import { Link } from "react-router-dom";
const TodoList = ({todos,handleDelete}) => {
  return ( 
    <>
      {todos.map(todo=> 
      <>
        <li key={todo._id}>{todo.name}, {todo.description}</li>
        <button onClick={() => handleDelete(todo._id)} type="button" className="btn btn-danger">Remove</button>
      </>
      )}
    </>
  )
}

export default TodoList;