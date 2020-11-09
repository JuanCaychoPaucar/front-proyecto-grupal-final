import React from 'react';

const ClienteListaCardFormCheckProducto = () => {
    return (
        <div className="card productos__card">
            <img className="card-img-top productos__card-img" src="http://placehold.it/500x500" alt="producto" />
            <div className="card-body text-center">
                <h5 className="card-title">Nombre del producto</h5>
                <h6 className="card-subtitle">Categoría</h6>
                <p className="card-text">S/. 25.00</p>
            </div>
        </div>
    )
}

export default ClienteListaCardFormCheckProducto;
