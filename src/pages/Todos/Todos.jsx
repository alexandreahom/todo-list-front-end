import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './Todo.css'
import { Link } from 'react-router-dom';


const Todo = ({profile, handleAddTodo, todos, user, handleDelete}) => {
    console.log(todos)
    return (
        <>
            <div className="todo">
                <ul>
        {/* {todos?.map(todo=> 
            <>
                <Link to={`/todos/${todo._id}`} state={{todo}} >
                <li>{todo.name}</li>
                <li>{todo.description}</li>
                </Link>
            </>
            )} */}
                </ul>
                <h1>Todo</h1>
                <TodoForm handleAddTodo={handleAddTodo} user={user} />
                <TodoList handleDelete={handleDelete} todos={todos}/>
                {/* {user?.profile === todos.owner?._id &&
                <>
                </>

                } */}
            </div>
        </>
    )
}

export default Todo;
