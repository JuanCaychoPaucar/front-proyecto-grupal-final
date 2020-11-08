import React from 'react';
import ClienteOfertasDiaCardIndex from './ClienteOfertasDiaCardIndex';

const ClienteOfertasDiaIndex = () => {
    return (
        <>
            <div class="section-bottom-fondo"></div>

            <div class="section-bottom-titulo">
                <h3 class="">Ofertas del día</h3>
            </div>
            
            <div class="section-bottom-ofertas row">
                <ClienteOfertasDiaCardIndex/>
                <ClienteOfertasDiaCardIndex/>
                <ClienteOfertasDiaCardIndex/>
                <ClienteOfertasDiaCardIndex/>
                <ClienteOfertasDiaCardIndex/>
                <ClienteOfertasDiaCardIndex/>
            </div>
        </>
    )
}

export default ClienteOfertasDiaIndex;
