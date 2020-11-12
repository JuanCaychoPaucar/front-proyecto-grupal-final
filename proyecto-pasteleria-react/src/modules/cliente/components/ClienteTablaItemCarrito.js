import React, { useContext } from 'react';
import ClienteContext from '../context/ClienteContext';

const ClienteTablaItemCarrito = ({ pedido }) => {

    const { agregarProducto, globalPedidos } = useContext(ClienteContext);



    return (
        <tr>
            <td>
                <img className="info-tabla-cuerpo-img" src={pedido.producto_img} alt="" />
            </td>
            <td><strong>{pedido.producto_nom}</strong></td>
            <td>S/ {pedido.producto_pre}</td>
            <td>
                <div className="cantidad">
                    <button className="boton-cantidad-left">-</button>
                    <span>{pedido.cantidad}</span>
                    <button className="boton-cantidad-right">+</button>
                </div>
            </td>
            <td>S/ {pedido.monto}</td>
            <td>
                <button className="boton-eliminar">x</button>
            </td>
        </tr>
    )
}

export default ClienteTablaItemCarrito;
