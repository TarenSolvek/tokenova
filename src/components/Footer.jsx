import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-start py-4 mt-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">Black Goose - Tienda de café</p>
            <p className="mb-0">Kynex Drive 8, Hashpoint, Bitan</p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end">
              <a href="#" className="text-white me-3">
                <i className="fa fa-facebook fa-1x"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fa fa-twitter fa-1x"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa fa-instagram fa1x"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;