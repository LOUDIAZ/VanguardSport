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
                <Link to="/">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" width={160} height={160} />
                </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link><Link className="link" to="/category/Mujer">Mujer</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/category/Hombre">Hombre</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/category/Infantil">Infantil</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/category/Zapatillas">Zapatillas</Link></Nav.Link>
                        <Nav.Link><Link className="link" to="/category/Ofertas">Ofertas</Link></Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#running">Running</NavDropdown.Item>
                            <NavDropdown.Item href="#training">Training</NavDropdown.Item>
                            <NavDropdown.Item href="#futbol">Fútbol</NavDropdown.Item>
                            <NavDropdown.Item href="#natacion">Natación</NavDropdown.Item>
                            <NavDropdown.Item href="#voley">Voley</NavDropdown.Item>
                            <NavDropdown.Item href="#tenis">Tenis</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar