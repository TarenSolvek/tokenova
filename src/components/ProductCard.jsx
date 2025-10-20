import React from 'react';
import { Card, Button } from 'react-bootstrap';
/*import './App.css';*/

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (

      // gr 

  <Card tabIndex="0" className="h-100 d-flex flex-column mx-2" style={{ width: '100%' }}>
    
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="card-img-top img-fluid mx-auto d-block"
        style={{ height: '180px', objectFit: 'contain', width: '80%' }}
      />

      
      {/*<Card.Body className="d-flex flex-column">*/}
      

      <Card.Body className="d-flex flex-column"> 
        <Card.Title>{product.title.slice(0,20)}</Card.Title>
        <Card.Text>
          {product.description.slice(0, 20)}...
        </Card.Text>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Button variant="primary" size="sm" className="mt-auto align-self-center px-3" onClick={() => agregarAlCarrito(product)}>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
