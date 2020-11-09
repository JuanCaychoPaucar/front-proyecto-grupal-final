import React from 'react'
import ClienteFooter from '../../../../components/ClienteFooter';
import ClienteCarruselIndex from '../../components/ClienteCarruselIndex';
import ClienteHeaderIndex from '../../components/ClienteHeaderIndex';
import ClienteOfertasDiaIndex from '../../components/ClienteOfertasDiaIndex';

import "./ClienteIndexScreen.css";

const ClienteIndexScreen = () => {
    return (
        <>
            <ClienteHeaderIndex />

            <main>
                <section className="section-top">
                    <ClienteCarruselIndex />
                </section>

                <section className="section-bottom">
                    <ClienteOfertasDiaIndex />
                </section>
            </main>

            <ClienteFooter/>
        </>
    )
}

export default ClienteIndexScreen;
