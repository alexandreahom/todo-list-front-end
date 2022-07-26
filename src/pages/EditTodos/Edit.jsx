import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import * as todoService from '../../services/todoService'
import './EditTodos.css'

const Edit = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name:'',
    description:''
  })

  useEffect(() => {
    const fetchComment = async (commentId) => {
      const viewTodo = await todoService.show(commentId)
      setFormData(viewTodo)
    }
    fetchComment(id)
  }, [id])
  
  const handleUpdate = async (e) => {
      e.preventDefault()
      await todoService.update(formData)
      navigate(`/todos`)
    }
  return (
    <>
      <section className='edit-todo'>
        <div className="c-container">
          <h1>Update Todo</h1>
          <form id="algin-form"  onSubmit={handleUpdate}>
            <div className="form-group">
              <input type="text" name="comment" value={formData.name} id=""msg cols="30" rows="5" className="container" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
              <input type="text" name="comment" value={formData.description} id=""msg cols="30" rows="5" className="container" onChange={(e) => setFormData({...formData, description: e.target.value})}/>
            </div>
            <div className="procomments">
              <button type="submit" id="post" className="c-btn">Edit Todo</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Edit