import { Link } from "react-router-dom";
import './TodoList.css'

const TodoList = ({todos, handleDelete, user}) => {
  return ( 
    <>

      {todos.map(todo=> 
      <>
        
        {user.profile === todo.owner ?
        <>
        <div key={todo._id} className='todolist'>{todo.name} - {todo.description} <button onClick={() => handleDelete(todo._id)} type="button" className="btn-list">Remove</button></div>
        </>
        :""
        }
      </>
      )}

    </>
  )
}

export default TodoList;