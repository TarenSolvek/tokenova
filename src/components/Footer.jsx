import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5 mt-5">
      <Container>
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Tokenova</h6>
            <p className="small mb-0">Inversión inmobiliaria tokenizada. Acceso global, fraccional y sin fricción.</p>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Productos</h6>
            <ul className="list-unstyled small">
              <li><a href="#marketplace" className="text-white text-decoration-none">Marketplace</a></li>
              <li><a href="#rmm" className="text-white text-decoration-none">RMM (Colateralización)</a></li>
              <li><a href="#como-funciona" className="text-white text-decoration-none">Cómo funciona</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Recursos</h6>
            <ul className="list-unstyled small">
              <li><a href="#blog" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#aprender" className="text-white text-decoration-none">Aprender</a></li>
              <li><a href="#documentacion" className="text-white text-decoration-none">Documentación</a></li>
            </ul>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <h6 className="fw-bold mb-3">Conecta</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="fa fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fa fa-discord"></i></a>
              <a href="#" className="text-white"><i className="fa fa-telegram"></i></a>
              <a href="#" className="text-white"><i className="fa fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
        <hr className="bg-white" />
        <Row className="text-center small mt-3">
          <Col>
            <p className="mb-2">© 2025 Tokenova Inc. | Tokenized Real Estate on Blockchain</p>
            <p className="mb-0">
              <a href="#privacy" className="text-white text-decoration-none me-3">Privacidad</a>
              <a href="#terms" className="text-white text-decoration-none me-3">Términos</a>
              <a href="#disclaimer" className="text-white text-decoration-none">Disclaimer</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;