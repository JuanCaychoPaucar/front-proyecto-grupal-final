import React from 'react';

const ClienteListaCardFormCheckProducto = ({ proCat }) => {
    return (
        <div className="card productos__card">
            <img className="card-img-top productos__card-img" src={proCat.producto_img} alt="producto" />
            <div className="card-body text-center">
                <h5 className="card-title">{proCat.producto_nom}</h5>
                <h6 className="card-subtitle">{proCat.categoria_nombre}</h6>
                <p className="card-text">S/. {proCat.producto_pre}</p>
            </div>
        </div>
    )
}

export default ClienteListaCardFormCheckProducto;
