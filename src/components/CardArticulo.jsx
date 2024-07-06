import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardArticulo = ({ title, description }) => {
  return (
    <Card style={{ width: '20rem', marginBottom: '20px' }}>
      <Card.Img variant="top" src="holder.js/50px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default CardArticulo;