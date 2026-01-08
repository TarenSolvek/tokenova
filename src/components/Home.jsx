import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-text">
              <h1 className="hero-title">Inversión inmobiliaria tokenizada</h1>
              <h2 className="hero-subtitle">Fraccionada, global y sin fricción</h2>
              <p className="hero-description">
                Por primera vez, inversores de todo el mundo pueden acceder al mercado inmobiliario estadounidense 
                a través de tokenización completa en blockchain. Propiedad fraccionada, ingresos semanales y gestión automática.
              </p>
              <div className="hero-buttons">
                <Button variant="primary" size="lg" as={Link} to="/comenzar" className="btn-comenzar">
                  COMENZAR
                </Button>
                <Button variant="outline-light" size="lg" className="ms-3">
                  Más información
                </Button>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <img src="https://placehold.co/500x400?text=Real+Estate" alt="Propiedad inmobiliaria tokenizada" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Benefits Section */}
      <section className="benefits-section">
        <Container>
          <h2 className="text-center mb-5">Invertir es más fácil que nunca</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="benefit-card">
                <h3 className="benefit-number">1</h3>
                <h4>Acceso fraccionado</h4>
                <p>Compra fracciones de propiedades reales sin necesidad de capital enorme. Desde pequeños importes.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="benefit-card">
                <h3 className="benefit-number">2</h3>
                <h4>Ingresos semanales</h4>
                <p>Recibe pagos de renta cada semana en stablecoins USD directamente a tu wallet. Sin intermediarios.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="benefit-card">
                <h3 className="benefit-number">3</h3>
                <h4>Gestión profesional</h4>
                <p>Empresas de gestión profesionales manejan arrendatarios, mantenimiento y cobros. Tú solo ganas.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-primary text-white py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <h3 className="stats-number">65K+</h3>
              <p>Inversores registrados</p>
            </Col>
            <Col md={3} className="mb-4">
              <h3 className="stats-number">$29M+</h3>
              <p>En ingresos distribuidos</p>
            </Col>
            <Col md={3} className="mb-4">
              <h3 className="stats-number">6-16%</h3>
              <p>Rentabilidad anual promedio</p>
            </Col>
            <Col md={3} className="mb-4">
              <h3 className="stats-number">2019</h3>
              <p>Desde que comenzamos</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="technology-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img src="https://placehold.co/500x400?text=Blockchain+Tech" alt="Tecnología blockchain" className="img-fluid" />
            </Col>
            <Col lg={6}>
              <h2>Potenciado por blockchain</h2>
              <p className="lead">
                Utilizamos Ethereum y Gnosis Chain para garantizar transparencia, seguridad y transacciones instantáneas.
              </p>
              <ul className="tech-features">
                <li>✓ Tokenización compliant con leyes reales</li>
                <li>✓ Propiedad real mediante LLC/Inc</li>
                <li>✓ Pagos automáticos en blockchain</li>
                <li>✓ Plataforma DeFi integrada (RMM)</li>
              </ul>
              <Button variant="primary" size="lg" className="mt-4" as={Link} to="/tecnologia">
                Entender la tecnología
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Final Section */}
      <section className="cta-final-section text-center py-5 bg-light">
        <Container>
          <h2 className="mb-3">Únete a miles de inversores globales</h2>
          <p className="lead mb-4">Comienza a construir tu cartera de bienes raíces tokenizados hoy.</p>
          <Button variant="primary" size="lg" as={Link} to="/comenzar">
            CREAR CUENTA AHORA
          </Button>
        </Container>
      </section>
    </>
  );
};

export default Home;

