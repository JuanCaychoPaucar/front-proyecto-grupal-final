import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

// reemplazar estas imagenes con las almacenadas en mockapi.
import carrusel_1 from "./../../../assets/img/carrusel-1.png";
import carrusel_2 from "./../../../assets/img/carrusel-2.png";
import carrusel_3 from "./../../../assets/img/carrusel-3.png";


const ClienteCarruselIndex = () => {

    return (
        <>
            <Carousel
                prevIcon={<span className="carousel-control-next-icon carrusel-flecha"><i className="fas fa-chevron-left"></i></span>}
                nextIcon={<span className="carousel-control-next-icon carrusel-flecha"><i className="fas fa-chevron-right"></i></span>}
            >

                {/* CODIGO PARA REALIZAR EL MAPEO CON IMAGENES DE MOCKAPI */}
                {/* {
                    this.items.map(item => {
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carrusel_1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
                } */}

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carrusel_3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <Button className="boton-ordenar">ORDENAR AHORA</Button>
        </>
    )
}

export default ClienteCarruselIndex;
