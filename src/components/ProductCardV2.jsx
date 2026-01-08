import React from 'react';
import { Card, Button, Badge, Modal, Row, Col, ProgressBar } from 'react-bootstrap';
import './ProductV2.css';

const ProductCardV2 = ({ product, onBuy }) => {
  const [show, setShow] = React.useState(false);
  const tokensTotal = product.tokensTotal ?? 1000;
  const tokensSold = product.tokensSold ?? Math.floor(Math.random() * tokensTotal);
  const tokenPrice = product.tokenPrice ?? (Number(product.price) || 1);
  const expectedIncomeDisplay = product.expectedIncome != null ? String(product.expectedIncome) : '—';
  const soldPct = Math.round((tokensSold / tokensTotal) * 100);

  return (
    <>
      <Card className="product-card-v2 h-100">
        <div className="card-media">
          <img src={product.image} alt={product.title} className="card-img img-fluid" />
          <div className="ribbon">{product.location ?? 'US'}</div>
          <Badge bg="light" text="dark" className="price-badge">${tokenPrice}/token</Badge>
        </div>

        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="mb-0 product-title">{product.title}</Card.Title>
          </div>

          <div className="d-flex justify-content-between small text-muted mb-2">
            <div>Expected income</div>
            <div><strong>{expectedIncomeDisplay}</strong></div>
          </div>

          <Card.Text className="text-muted small mb-3">{product.description.slice(0, 120)}...</Card.Text>

          <div className="mt-auto">
            <Row className="align-items-center gx-2">
              <Col xs={8}>
                <ProgressBar now={soldPct} label={`${soldPct}%`} />
                <div className="small text-muted mt-1">{tokensSold} / {tokensTotal} tokens vendidos</div>
              </Col>
              <Col xs={4} className="text-end">
                <Button size="sm" variant="primary" onClick={() => setShow(true)}>Ver</Button>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} className="mb-3">
              <img src={product.image} alt={product.title} className="img-fluid rounded" />
            </Col>
            <Col md={6}>
              <h5>Detalles</h5>
              <p>{product.description}</p>

              <ul className="list-unstyled">
                <li><strong>Precio por token:</strong> ${tokenPrice}</li>
                <li><strong>Expected income:</strong> {expectedIncomeDisplay}</li>
                <li><strong>Tokens totales:</strong> {tokensTotal}</li>
                <li><strong>Tokens vendidos:</strong> {tokensSold}</li>
                <li><strong>Ubicación:</strong> {product.location ?? 'US'}</li>
              </ul>

              <div className="d-flex gap-2 mt-3">
                <Button as="a" href="/comenzar" variant="primary" onClick={() => { setShow(false); if (onBuy) onBuy(product); }}>
                  Comprar tokens
                </Button>
                <Button variant="outline-secondary" onClick={() => setShow(false)}>Cerrar</Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductCardV2;
