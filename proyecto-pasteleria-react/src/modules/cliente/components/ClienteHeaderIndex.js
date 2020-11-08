import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";

import "./header.css";
import logo from "./../../../assets/img/logo_transparente.png";

const ClienteHeaderIndex = () => {
    return (
        <>
            <header>
                <Navbar className="p-0 contenedor__navbar" collapseOnSelect expand="md">

                    <Navbar.Brand className="p-0" href="#home">
                        <img src={logo} alt="" loading="lazy" />
                    </Navbar.Brand>

                    <Navbar.Toggle className="d-lg-none" aria-controls="responsive-navbar-nav" >
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="responsive-navbar-nav contenedor__navbar-colapsado">
                        <Nav className="mr-auto mt-2 mt-lg-0 contenedor__navbar-colapsado-nav">
                            <Nav.Link className="item-enlace" href="#"><span className="item-enlace-texto">INICIO</span></Nav.Link>
                            <Nav.Link className="item-enlace" href="#"><span className="item-enlace-texto">PRODUCTOS</span></Nav.Link>
                            <Nav.Link className="item-enlace" href="#"><span className="item-enlace-texto">NOSOTROS</span></Nav.Link>
                            <Nav.Link className="item-enlace" href="#"><span className="item-enlace-texto">CONTACTO</span></Nav.Link>
                            
                            <Nav.Link className="item-enlace item-busqueda py-0">
                                    <Form inline className="my-2 my-lg-0 mr-3 item-busqueda-form">
                                        <FormControl className="mr-sm-2 item-busqueda-form-input" type="text" placeholder="Búsqueda" />
                                        <Button variant="my-2 my-sm-0 item-busqueda-form-button">
                                            <i className="fas fa-search"></i>
                                        </Button>
                                    </Form>
                            </Nav.Link>
                            
                            <Nav.Link className="item-enlace item-carrito">
                                <div>
                                    <i className="fas fa-shopping-cart mr-3"></i>
                                </div>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>



                </Navbar>
            </header>


        </>
    )
}

export default ClienteHeaderIndex;
