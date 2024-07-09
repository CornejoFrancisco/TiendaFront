// ArticlesList.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ArticlesList = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {Array.isArray(items) && items.length > 0 ? (
          items.map((item, index) => (
            <div className="col-4" key={`item-${index}`}>
              <Card style={{ width: '20rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={item.image || 'holder.js/100px180'} />
                <Card.Body>
                  <Card.Title>{item.nombre}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">Agregar</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No hay artículos para mostrar</p>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;
