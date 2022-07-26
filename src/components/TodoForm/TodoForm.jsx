import { useState, useEffect, useRef } from "react"
import './TodoForm.css'

const TodoForm = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description:''
  })

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])


    const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    // console.log(props.user.profile)
    const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddTodo(formData,props.user.profile)
    }



  return ( 
    <>
      <form className="todo-form" ref={formElement} onSubmit={handleSubmit} autoComplete='off'>
        <input type="text" placeholder="Enter Todos" name="name" onChange={handleChange} />
        <input type="text" placeholder="Explain in 25 words" name="description" onChange={handleChange} maxLength={25}  /> <br />
        <button className="btn-form" type="submit" disabled={!validForm}>Add</button>
      </form>
    </>
  )
}

export default TodoForm;