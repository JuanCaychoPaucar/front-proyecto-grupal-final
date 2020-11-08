import React from 'react'
import ClienteCarruselIndex from '../../components/ClienteCarruselIndex';
import ClienteHeaderIndex from '../../components/ClienteHeaderIndex';

import "./ClienteIndexScreen.css";

const ClienteIndexScreen = () => {
    return (
        <>
            <ClienteHeaderIndex />
            <main>
                <section className="section-top">
                    <ClienteCarruselIndex />
                </section>
            </main>
            CLIENTE INDEX SCREEN
        </>
    )
}

export default ClienteIndexScreen;
