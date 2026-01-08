import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';

const Header = () => {
  // Fixed positioning and sizing of header elements is handled by CSS (`src/index.css`).
  // Removed runtime debugging and inline style forcing now that CSS rules are authoritative.


  return (
    <>
      {/* Barra superior con enlaces a la derecha */}
      <div className="top-bar bg-primary text-white">
        <Container className="d-flex justify-content-end align-items-center gap-3 small">
          <Nav.Link as={Link} to="/blog" className="me-3">BLOG</Nav.Link>

          <NavDropdown title="MI CUENTA" id="top-account-dropdown" align="end" className="m-0">
            <NavDropdown.Item as={Link} to="/cartera">Cartera</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/verificacion">Verificación de identidad</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/detalles-cuenta">Detalles de la cuenta</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/logout">Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 main-navbar">
        <Container>       
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="https://placehold.co/130x50?text=Tokenova" alt="Logo"
              className="d-inline-block align-top me-3"
            />
            {/*<span>Tienda de café</span>*/}
          </Navbar.Brand>

          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/marketplace" className="me-3">Marketplace</Nav.Link>
            <Nav.Link as={Link} to="/como-funciona" className="me-3">Cómo funciona</Nav.Link>
            <Nav.Link as={Link} to="/aprender" className="me-3">Aprender</Nav.Link>
            <NavDropdown title="Equipo" id="team-dropdown" align="end" className="me-3">
              <NavDropdown.Item as={Link} to="/sobre-nosotros">Sobre nosotros</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/empleos">Empleos</NavDropdown.Item>
            </NavDropdown>

            <Button variant="primary" as={Link} to="/comenzar" className="ms-3">
              COMENZAR
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
