import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Placeholder: limpiar sesión aquí
    setTimeout(() => navigate('/'), 800);
  }, [navigate]);
  return (
    <Container className="py-5">
      <h1>Cerrando sesión...</h1>
      <p>Redirigiendo a inicio.</p>
    </Container>
  );
};

export default Logout;
