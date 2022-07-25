import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import './Todo.css'
import * as todoService from '../../services/todoService'
import { useState } from 'react';


const Todo = (props) => {
    const [todos, setTodos] = useState([])

    const handleAddTodo = async (formData) => {
        const newTodo = await todoService.create(formData)
        setTodos([...todos, newTodo])
    }
    return (
        <>
            <div className="todo">
                <h1>Todo</h1>
                <TodoForm handleAddTodo={handleAddTodo} />
                <TodoList todos={todos}/>
            </div>
        </>
    )
}

export default Todo;
