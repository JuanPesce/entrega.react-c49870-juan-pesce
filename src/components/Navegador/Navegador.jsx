import { CartWidget } from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';


const Navegador = ()=> {
  return (
        <Navbar collapseOnSelect expand="lg" className="bg-success">
            <Container>
                <Navbar.Brand href="#home" className="text-light">Tienda Yerba Mate</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-light text-dark' : 'btn text-light'} to='/'>Inicio</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-light text-dark' : 'btn text-light'} to='/categoria/comun'>Comun</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-light text-dark' : 'btn text-light'} to='/categoria/organica'>Organica</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-light text-dark' : 'btn text-light'} to='/categoria/barbacua'>Barbacua</NavLink>
                    {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    <NavLink className={'btn btn-light text-dark'} to='/cart'><CartWidget /></NavLink>
                    <Nav.Link eventKey={2} href="#memes">
                      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default Navegador