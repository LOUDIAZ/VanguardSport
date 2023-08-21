import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "./assets/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-tertiary">
            <Container className="container ms-auto">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="logo" width={160} height={160} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/category/Mujer">Mujer</Nav.Link>
                        <Nav.Link as={Link} to="/category/Hombre">Hombre</Nav.Link>
                        <Nav.Link as={Link} to="/category/Infantil">Infantil</Nav.Link>
                        <Nav.Link as={Link} to="/category/Zapatillas">Zapatillas</Nav.Link>
                        <Nav.Link as={Link} to="/category/Ofertas">Ofertas</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#running">Running</NavDropdown.Item>
                            <NavDropdown.Item href="#training">Training</NavDropdown.Item>
                            <NavDropdown.Item href="#futbol">Fútbol</NavDropdown.Item>
                            <NavDropdown.Item href="#natacion">Natación</NavDropdown.Item>
                            <NavDropdown.Item href="#voley">Voley</NavDropdown.Item>
                            <NavDropdown.Item href="#tenis">Tenis</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href=""><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar