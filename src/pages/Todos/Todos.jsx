import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './Todo.css'
import { Link } from 'react-router-dom';


const Todo = ({profile, handleAddTodo, todos, user, handleDelete}) => {
    return (
        <>

            <div className="todo">
                <ul>
                </ul>
                <h1>Todo</h1>
                <TodoForm handleAddTodo={handleAddTodo} user={user} />
                <TodoList handleDelete={handleDelete} user={user} todos={todos}/>
            </div>

        </>
    )
}

export default Todo;
