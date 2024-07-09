// Home.js
import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Home({ items }) {
    console.log('items:', items);
    console.log(Array.isArray(items));

    // Si items no es un array, conviértelo en un array con un solo elemento
    const itemsArray = Array.isArray(items) ? items : [items];

    return (
        <>
            <h3>Formulario de Búsqueda</h3>
            <div className="row">
                <div className="col-12">
                    <div className="container">
                        <div className="row">
                            {itemsArray.length > 0 ? (
                                itemsArray.map((item, index) => (
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
                </div>
            </div>
        </>
    );
}

export default Home;
