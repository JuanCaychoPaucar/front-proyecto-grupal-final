import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { arregloSinRepetir } from '../../../services/numerosAleatorios';
import { getProductoById } from '../../../services/productoService';

import logo from "./../../../assets/img/logo_transparente.png";

const ClienteCarruselIndex = () => {

    // generamos un arreglo de 5 numeros aleatorios no repetidos
    const [aleatorio, setAleatorio] = useState(arregloSinRepetir(5));
    const [slider, setSlider] = useState([]);
    const [estado, setEstado] = useState(false);

    const getProductosAleatorioAsync = async () => {
        let objetos = [];

        let numeros = aleatorio;
        // for (let i = 0; i < numeros.length; i++) {
        //     let peticion = await getProductoById(numeros[i]);
        //     console.log(peticion);
        //     let obj = await peticion.json();
        //     objetos.push(obj);
        // }

        for (let i = 0; i < numeros.length; i++) {
            let data = await getProductoById(numeros[i]);
            if (data !== null) {
                objetos.push(data);
            }
        }

        return objetos;
    };

    useEffect(() => {
        getProductosAleatorioAsync().then(data => {
            // console.log(data);
            setSlider(data);
            // setEstado(true);
            console.log(data);
        });
    }, []);


    return (
        <>
            {
                slider.length === 0 ?
                    <Carousel
                        className="carrusel"
                        fade={true}
                        prevIcon={<span className="carousel-control-next-icon carrusel-flecha"><i className="fas fa-chevron-left"></i></span>}
                        nextIcon={<span className="carousel-control-next-icon carrusel-flecha"><i className="fas fa-chevron-right"></i></span>}
                    >
                        <Carousel.Item className="w-100">
                            <img
                                className="d-block w-100 slider-producto"
                                src={logo}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                    :
                    <Carousel fade={true}
                        prevIcon={<span className="carousel-control-next-icon carrusel-flecha"><i className="fas fa-chevron-left"></i></span>}
                        nextIcon={<span className="carousel-control-next-icon carrusel-flecha"><i className="fas fa-chevron-right"></i></span>}
                    >

                        {
                            slider.map(item => {
                                return <Carousel.Item key={item.producto_id}>
                                    <img
                                        className="d-block w-100 slider-producto"
                                        src={item.producto_img}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 className="bg-dark">{item.producto_nom}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })
                        }

                    </Carousel>
            }

            <Button className="boton-ordenar">ORDENAR AHORA</Button>
        </>
    )
}

export default ClienteCarruselIndex;
