import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBar' >
                <Container>
                    <Navbar.Brand href="/">My-Web-API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <Nav>
                        <NavDropdown title="GitHub" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="https://github.com/vitorconceicaovc/MyWebApiP2" target="blank">Frontend</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://github.com/vitorconceicaovc/MyWebApiP1" target="blank">Backend</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="http://mywebapi.somee.com/Help" target='_blank' >API</Nav.Link>   
                        <Nav.Link href="/about">About</Nav.Link>                     
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar