import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BiBasket } from 'react-icons/bi';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary justify-content-center" style={{ marginLeft: '3%', marginRight: '3%', backgroundColor: '#ffff', borderBottom: '1px solid #dee2e6' }}>
            <Container fluid >
                <Navbar.Brand href="inicio">Tienda Mercado</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href="#action1">Inicio</Nav.Link>
                        <NavDropdown title="Producto" id="navbarScrollingDropdown">
                            <NavDropdown.ItemText href="#action3">Verduras</NavDropdown.ItemText>
                            <NavDropdown.Item href="#action4">Comida</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Otros</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex" style={{ maxWidth: '3000px', width: '100%', backgroundColor: '#ffff', padding: '10px' }}>
                    <Form.Control type="search" placeholder="Buscar..." className="me-2 flex-grow-1" aria-label="Search" />
                    <Button variant="outline-success">Buscar</Button>
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
