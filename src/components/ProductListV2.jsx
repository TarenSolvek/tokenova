import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button, Spinner } from 'react-bootstrap';
import ProductCardV2 from './ProductCardV2';
import './ProductV2.css';

const ProductListV2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [minPrice, setMinPrice] = useState('');

  useEffect(() => {
    let mounted = true;
    const url = 'https://692e49a591e00bafccd3623c.mockapi.io/products';
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        setProducts(data);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
    return () => { mounted = false; };
  }, []);

  const filtered = products
    .filter(p => (!query || p.title.toLowerCase().includes(query.toLowerCase())))
    .filter(p => (!minPrice || Number(p.price) >= Number(minPrice)));

  const sorted = filtered.sort((a, b) => {
    if (sort === 'price-asc') return Number(a.price) - Number(b.price);
    if (sort === 'price-desc') return Number(b.price) - Number(a.price);
    // featured (default): keep API order
    return 0;
  });

  return (
    <Container className="py-5">
      <Row>
        <Col lg={3} className="mb-4">
          <div className="sticky-sidebar">
            <h5>Filtrar</h5>
            <Form className="mb-3">
              <Form.Label className="small">Buscar</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control placeholder="Propiedad, ciudad, etc..." value={query} onChange={e => setQuery(e.target.value)} />
                <Button variant="outline-secondary" onClick={() => setQuery('')}>Limpiar</Button>
              </InputGroup>

              <Form.Label className="small">Precio mínimo</Form.Label>
              <Form.Control type="number" placeholder="0" value={minPrice} onChange={e => setMinPrice(e.target.value)} />

              <Form.Label className="small mt-3">Ordenar</Form.Label>
              <Form.Select value={sort} onChange={e => setSort(e.target.value)}>
                <option value="featured">Recomendado</option>
                <option value="price-asc">Precio: asc</option>
                <option value="price-desc">Precio: desc</option>
              </Form.Select>
            </Form>

            <div className="mt-4">
              <h6 className="mb-2">¿Listo para invertir?</h6>
              <p className="small text-muted">Comienza con una cuenta y compra tokens en un par de clics.</p>
              <Button as="a" href="/comenzar" variant="primary">Crear cuenta</Button>
            </div>
          </div>
        </Col>

        <Col lg={9}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0">Comprar tokens</h3>
            <div className="text-muted small">{sorted.length} activos</div>
          </div>

          {loading ? (
            <div className="text-center py-5"><Spinner animation="border" /></div>
          ) : (
            <Row xs={1} sm={2} md={2} lg={3} className="g-4">
              {sorted.map(product => (
                <Col key={product.id}>
                  <ProductCardV2 product={product} />
                </Col>
              ))}
            </Row>
          )}

          {!loading && sorted.length === 0 && (
            <div className="alert alert-info mt-4">No se encontraron propiedades que coincidan con los filtros.</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListV2;
