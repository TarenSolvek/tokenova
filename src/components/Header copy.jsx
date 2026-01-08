import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Badge, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const Header = () => {
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

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

      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>       
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="https://placehold.co/130x50?text=Tokenova" alt="Logo"
              className="d-inline-block align-top me-3"
            />
            {/*<span>Tienda de café</span>*/}
          </Navbar.Brand>

          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className="me-3">Comprar tokens</Nav.Link>
            <Nav.Link as={Link} to="/" className="me-3">Tokens Coateralizados</Nav.Link>
            <Nav.Link as={Link} to="/deals" className="me-3">DeFi</Nav.Link>
            <Nav.Link as={Link} to="/essentials" className="me-3">Equipo</Nav.Link>
            <Nav.Link as={Link} to="/essentials" className="me-3">Aprender</Nav.Link>

            <div className="d-flex align-items-center">
              <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
                Administración
              </Button>
              <Link to="/carrito" className="text-white position-relative">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                                {totalItems > 0 && (
                    <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                      {totalItems}
                    </Badge>
                  )}
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
