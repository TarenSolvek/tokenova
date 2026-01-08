import React from 'react';
import { Container } from 'react-bootstrap';

import Team from './Team';

const SobreNosotros = () => (
  <Container className="py-5">
    <h1>Sobre nosotros</h1>
    <p>Nuestro equipo combina sólidos conocimientos técnicos con una profunda comprensión del mercado financiero global. Está conformado por profesionales que integran experiencia en desarrollo de software, arquitectura de sistemas distribuidos y ciberseguridad, junto con especialistas en finanzas tradicionales, regulación y análisis de riesgos.</p>

    <div className="mt-4">
      <a href="#team" className="btn btn-outline-primary mb-3">Conoce al equipo</a>
    </div>

    <Team />
  </Container>
);

export default SobreNosotros;
