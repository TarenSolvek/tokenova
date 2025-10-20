import React from 'react';
import ProductList from './ProductList';

const Deals = () => {
  return (
    <div className="container">
      <h1>Ofertas</h1>
      <ProductList category="electronics" />
    </div>
  );
};

export default Deals;
