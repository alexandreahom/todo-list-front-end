import { Link } from "react-router-dom";
const TodoList = (props) => {
  return ( 
    <>
      {props.todos?.map(todo=> 
            <>
                <Link to={`/todos/${todo._id}`} state={{todo}} >
                <li>{todo.name}</li>
                <li>{todo.description}</li>
                </Link>
            </>
            )}
    </>
  )
}

export default TodoList;