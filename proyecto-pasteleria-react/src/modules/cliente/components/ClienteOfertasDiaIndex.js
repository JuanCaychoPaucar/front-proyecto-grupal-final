import React from 'react';
import ClienteOfertasDiaCardIndex from './ClienteOfertasDiaCardIndex';

const ClienteOfertasDiaIndex = () => {
    return (
        <>
            <div className="section-bottom-fondo"></div>

            <div className="section-bottom-titulo">
                <h3 className="">Ofertas del día</h3>
            </div>
            
            <div className="section-bottom-ofertas row">
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
