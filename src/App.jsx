import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as todoService from './services/todoService'
import * as profileService from './services/profileService'
import Todos from './pages/Todos/Todos'
import Edit from './pages/EditTodos/Edit'
import Profile from './pages/Profile/Profile'
import './App.css'


const App = () => {
  const [todos, setTodos] = useState([])
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
      const fetchProfiles = async () => {
        const profileData = await profileService.getAllProfiles()
        setProfiles(profileData)
      }
      fetchProfiles()
    }, [])

  const [user, setUser] = useState(authService.getUser())

  useEffect(() => {
    const fetchAllTodos = async () =>{
      const todoData = await todoService.getAll()
      setTodos(todoData)
    }
    fetchAllTodos()
  },[])

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAddTodo = async (formData, id) => {
    const newTodo = await todoService.create(formData, id)
    setTodos([...todos, newTodo])
}

const handleDelete = async (id) => {
  const deleteTodos = await todoService.deleteTodos(id)
  setTodos(todos.filter(todo => todo._id !== deleteTodos._id))
}

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/profiles/:id"
          element={< Profile user={user} />}
        />
        <Route
          path="/todos"
          
          element={< Todos todos={todos} handleDelete={handleDelete} handleAddTodo={handleAddTodo} user={user} profiles={profiles} />}
        />
        <Route
          path="/todos/:id"
          element={< Edit todos={todos} />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
