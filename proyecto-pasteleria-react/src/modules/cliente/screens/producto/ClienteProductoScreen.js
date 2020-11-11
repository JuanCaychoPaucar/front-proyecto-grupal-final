import React, { useEffect, useState } from 'react';
import ClienteFooter from '../../../../components/ClienteFooter';
import ClienteHeader from '../../../../components/ClienteHeader';
import { getCategorias } from '../../../../services/categoriaService';
import { getProductos } from '../../../../services/productoService';
import ClienteAsideFiltroFormCheckProducto from '../../components/ClienteAsideFiltroFormCheckProducto';
import ClienteListaFormCheckProducto from '../../components/ClienteListaFormCheckProducto';

import "./ClienteProductoScreen.css";

const ClienteProductoScreen = () => {

    const [productoCategoria, setProductoCategoria] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const getAllProductos = async () => {

        let objProductos = [];
        let objCategorias = [];

        objProductos = await getProductos().then(data => {
            return data;
        });

        objCategorias = await getCategorias().then(data => {
            return data;
        });

        let temporal = [];

        for (let i = 0; i < objCategorias.length; i++) {
            const resultado = objProductos.filter((pro) => {
                if (pro.categoria_id == objCategorias[i].categoria_id) {
                    let obj = { ...pro, categoria_nombre: objCategorias[i].categoria_nom }
                    temporal.push(obj);
                }
            });
        }

        setProductoCategoria(temporal);
        setCategorias(objCategorias);
        // console.log(temporal);
        // console.log(objCategorias);

    };

    useEffect(() => {
        getAllProductos();
    }, []);

    return (
        <>
            <ClienteHeader pagina="PRODUCTOS" />

            <main className="productos">
                <ClienteAsideFiltroFormCheckProducto categorias={categorias} />

                <ClienteListaFormCheckProducto productoCategoria={productoCategoria} />
            </main>

            {/* PENDIENTE COLOCAR PAGINACION */}

            <ClienteFooter />
        </>
    )
}

export default ClienteProductoScreen;
