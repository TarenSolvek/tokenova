import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'José Gutierrez',
    role: 'CEO & Cofundador',
    bio: 'Líder estratégica con experiencia en tokenización de activos y fintech.',
    image: 'https://res.cloudinary.com/dwvi0c49z/image/upload/v1767881884/persona1_yjah25.jpg',
    linkedin: '#'
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    role: 'CTO',
    bio: 'Arquitecto de software con enfoque en infra escalable y seguridad.',
    image: 'https://res.cloudinary.com/dwvi0c49z/image/upload/v1767882139/persona2_ss6yzk.jpg',
    linkedin: '#'
  },
  {
    id: 3,
    name: 'Ramón Ortiz',
    role: 'Head de Producto',
    bio: 'Diseña experiencias e integra producto con negocio y usuarios.',
    image: 'https://res.cloudinary.com/dwvi0c49z/image/upload/v1767882184/persona3_iykimh.jpg',
    linkedin: '#'
  }
];

const Team = () => (
  <Container className="py-5" id="team">
    <h2 className="mb-4">Nuestro equipo</h2>

    <Row xs={1} sm={2} md={3} className="g-4 mt-3 team-grid">
      {teamMembers.map(member => (
        <Col key={member.id}>
          <Card className="team-card h-100 text-center">
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="img-fluid rounded-circle" />
            </div>
            <Card.Body>
              <Card.Title className="mb-1">{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
              <Card.Text className="small text-muted">{member.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Team;
