import { useState} from 'react'
import  '../../styles/todos.css'

const Todos = (props) => {
    const [formData, setFormData] = useState({})
    const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddTodo(formData)
    }
    return (
    <>
    <div id="container">
        <h1>To-Do List <i className="fa fa-plus"></i></h1>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="Add New Todo"/>
            <button type='submit'>Add </button>
        </form>
        <ul>
            {/* <li><span><i className="fa fa-trash"></i></span> Go To Maths Class</li>
            <li><span><i className="fa fa-trash"></i></span> Buy New Clothes</li>
            <li><span><i className="fa fa-trash"></i></span> Visit George</li> */}
        </ul>
    </div>
    </>
    )
}

export default Todos
