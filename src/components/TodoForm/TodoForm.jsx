import { useState, useEffect, useRef } from "react"

const TodoForm = (props) => {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    name: ''
  })

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])


    const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }

    const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddTodo(formData)
    }



  return ( 
    <>
      <form className="todo-form" ref={formElement} onSubmit={handleSubmit} autoComplete='off'>
        <input type="text" placeholder="Enter Todos" name="name" onChange={handleChange} />
        <button type="submit" disabled={!validForm}>Add</button>
      </form>
    </>
  )
}

export default TodoForm;