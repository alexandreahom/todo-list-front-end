import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './Todo.css'
import { Link } from 'react-router-dom';


const Todo = ({profile, handleAddTodo, todos, user}) => {
    // console.log(profile)
    return (
        <>
            <section className="todo">
                <div >
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
                    <TodoList todos={todos}/>
                </div>
            </section>
        </>
    )
}

export default Todo;
