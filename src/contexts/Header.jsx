import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { BiBasket } from 'react-icons/bi';

function Header({ onData }) {
    const [filtro, setFiltro] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onData(filtro);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center" style={{ backgroundColor: '#ffff', borderBottom: '1px solid #dee2e6' }}>
            <Container fluid>
                <Navbar.Brand href="inicio">Tienda Mercado</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <NavDropdown title="Categoría" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Verduras</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Comida</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

                <Form className="d-flex" style={{ maxWidth: '3000px', width: '100%', backgroundColor: '#ffff', padding: '10px' }} onSubmit={handleSubmit}>
                    <div className="col-12">
                        <div className="mb-3 d-flex">
                            <input
                                type="text"
                                placeholder="Descripcion"
                                className="form-control me-2"
                                onChange={(event) => { setFiltro(event.target.value); }}
                            />
                            <button type="submit" className="btn btn-primary">
                                Buscar
                            </button>
                        </div>
                    </div>
                </Form>

                <Nav.Link href="carrito">
                    <BiBasket size={30} /> {/* Ajusta el tamaño del ícono con la propiedad size */}
                </Nav.Link>

                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link href="perfil">Perfil</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
