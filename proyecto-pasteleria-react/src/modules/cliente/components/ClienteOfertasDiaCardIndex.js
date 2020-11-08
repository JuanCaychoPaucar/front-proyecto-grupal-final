import React from 'react';

const ClienteOfertasDiaCardIndex = () => {
    return (
        <div className="card card-ofertas">
            <img className="card-ofertas-img" src="http://placehold.it/230x180" alt="ofertas" />
            <div className="card-body card-ofertas-information">
                <div className="card-ofertas-information-top">
                    <h5 className="card-title">Nombre del producto</h5>
                    <h6 className="card-subtitle">Categoria</h6>
                </div>
                <p className="card-text card-ofertas-information-bottom">S/. 25</p>
            </div>
        </div>
    )
}

export default ClienteOfertasDiaCardIndex;
