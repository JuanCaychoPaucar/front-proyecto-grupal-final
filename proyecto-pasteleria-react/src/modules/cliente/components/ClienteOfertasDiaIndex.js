import React, { useState } from 'react';
import { useEffect } from 'react';
import { arregloSinRepetir } from '../../../services/numerosAleatorios';
import { getProductoById } from '../../../services/productoService';
import ClienteOfertasDiaCardIndex from './ClienteOfertasDiaCardIndex';

const ClienteOfertasDiaIndex = () => {

    // generamos un arreglo de 5 numeros aleatorios no repetidos
    const [aleatorio, setAleatorio] = useState(arregloSinRepetir(6));
    const [cardProducto, setCardProducto] = useState([]);
    const [estado, setEstado] = useState(false);

    const getProductosAleatorioAsync = async () => {
        let objetos = [];

        let numeros = aleatorio;
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
            setCardProducto(data);
            // setEstado(true);
        });
    }, []);


    return (
        <>
            <div className="section-bottom-fondo"></div>

            <div className="section-bottom-titulo">
                <h3 className="">Sugerencias</h3>
            </div>

            <div className="section-bottom-ofertas row">
                {
                    cardProducto.map(pro => {
                        return <ClienteOfertasDiaCardIndex key={pro.producto_id} producto={pro} />
                    })
                }
            </div>
        </>
    )
}

export default ClienteOfertasDiaIndex;
