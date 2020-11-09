import React from 'react';
import ClienteFooter from '../../../../components/ClienteFooter';
import ClienteHeader from '../../../../components/ClienteHeader';
import ClienteAsideFiltroFormCheckProducto from '../../components/ClienteAsideFiltroFormCheckProducto';
import ClienteListaFormCheckProducto from '../../components/ClienteListaFormCheckProducto';

import "./ClienteProductoScreen.css";

const ClienteProductoScreen = () => {
    return (
        <>
            <ClienteHeader />

            <main className="productos">
                <ClienteAsideFiltroFormCheckProducto />

                <ClienteListaFormCheckProducto />
            </main>

            {/* PENDIENTE COLOCAR PAGINACION */}

            <ClienteFooter />
        </>
    )
}

export default ClienteProductoScreen;
