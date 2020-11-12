import React from 'react';

const ClienteTablaItemCarrito = () => {
    return (
        <tr>
            <td>
                <img className="info-tabla-cuerpo-img" src="https://via.placeholder.com/400x400" alt="" />
            </td>
            <td><strong>Nombre del producto</strong></td>
            <td>S/ 25.00</td>
            <td>
                <div className="cantidad">
                    <button className="boton-cantidad">-</button>
                    <span>0</span>
                    <button className="boton-cantidad">+</button>
                </div>
            </td>
            <td>S/ 25.00</td>
            <td>
                <button className="boton-eliminar">x</button>
            </td>
        </tr>
    )
}

export default ClienteTablaItemCarrito;
