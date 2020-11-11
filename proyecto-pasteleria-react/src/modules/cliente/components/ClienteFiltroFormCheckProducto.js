import React from 'react';

const ClienteFiltroFormCheckProducto = ({ categoria }) => {
    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" />
            <label className="form-check-label">{categoria.categoria_nom}</label>
        </div>
    )
}

export default ClienteFiltroFormCheckProducto;
