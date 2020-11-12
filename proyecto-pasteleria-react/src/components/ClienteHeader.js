import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./ClienteHeader.css";
import logo from "./../assets/img/logo_transparente.png";

const ClienteHeader = ({ pagina }) => {

    return (
        <header className="header-2">
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
                        <NavLink className="nav-link item-enlace" activeClassName="active" to={"/"} ><span className="item-enlace-texto">INICIO</span></NavLink>
                        <NavLink className="nav-link item-enlace" activeClassName="active" to={"/productos"} ><span className="item-enlace-texto">PRODUCTOS</span></NavLink>
                        <NavLink className="nav-link item-enlace" activeClassName="active" to={"/"} ><span className="item-enlace-texto">NOSOTROS</span></NavLink>
                        <NavLink className="nav-link item-enlace" activeClassName="active" to={"/"} ><span className="item-enlace-texto">CONTACTO</span></NavLink>

                        <Nav.Link className="item-enlace item-busqueda py-0">
                            <Form inline className="my-2 my-lg-0 mr-3 item-busqueda-form">
                                <FormControl className="mr-sm-2 item-busqueda-form-input" type="text" placeholder="Búsqueda" />
                                <Button variant="my-2 my-sm-0 item-busqueda-form-button">
                                    <i className="fas fa-search"></i>
                                </Button>
                            </Form>
                        </Nav.Link>

                        <NavLink className="item-enlace item-carrito nav-link" to={"/carrito"}>
                            <div>
                                <i className="fas fa-shopping-cart mr-3"></i>
                            </div>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <h2 className="text-center">{pagina}</h2>
        </header>
    )
}

export default ClienteHeader;
