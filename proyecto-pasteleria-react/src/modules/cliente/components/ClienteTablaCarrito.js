import React from 'react';
import ClienteTablaItemCarrito from './ClienteTablaItemCarrito';

const ClienteTablaCarrito = () => {
    return (
        <table className="table table-striped text-center info-tabla">
            <thead className="info-tabla-cabecera">
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>

            <tbody className="info-tabla-cuerpo">

                <ClienteTablaItemCarrito />
                <ClienteTablaItemCarrito />
                <ClienteTablaItemCarrito />
                <ClienteTablaItemCarrito />
                <ClienteTablaItemCarrito />

            </tbody>
        </table>
    )
}

export default ClienteTablaCarrito;
