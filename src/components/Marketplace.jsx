import React from 'react';
import { Container } from 'react-bootstrap';
import ProductListV2 from './ProductListV2';

const Marketplace = () => {
  return (
    <Container className="py-5">
      <h1>Marketplace</h1>
      <p>Página de listado de propiedades tokenizadas.</p>
      <ProductListV2 />
    </Container>
  );
};

export default Marketplace;
