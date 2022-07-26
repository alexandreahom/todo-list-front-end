// import { Link } from 'react-router-dom'

// const NavBar = ({ user, handleLogout }) => {
//   return (
//     <>
//       {user ?
//         <nav>
//           <ul>
//             <li><Link to="/todos">Todos</Link></li>
//             <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
//             <li><Link to="/changePassword">Change Password</Link></li>
//           </ul>
//         </nav>
//       :
//         <nav>
//           <ul>
//             <li><Link to="/login">Log In</Link></li>
//             <li><Link to="/signup">Sign Up</Link></li>
//           </ul>
//         </nav>
//       }
//     </>
//   )
// }

// export default NavBar


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar({ user, handleLogout}) {
  return (
    <>
    {user ? 
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-bar">
              <Link className='nav-link' to="/todos">TODOS</Link>
              <Link className='nav-link' to="" onClick={handleLogout}>LOG OUT</Link>
              <Link className='nav-link' to="/changePassword">CHANGE PASSWORD</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      :
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-bar">
              <Link className='nav-link' to="/login">Log In</Link>
              <Link className='nav-link' to="/signup">Sign Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    }
    </>
  );
}

export default NavBar;
