import React, { useContext, useEffect, useState } from 'react';
import ClienteContext from '../context/ClienteContext';

const ClienteProcesarPedido = () => {

    const { globalPedidos } = useContext(ClienteContext);
    const [montoTotal, setMontoTotal] = useState(0);

    const montoTotalPedido = (globalPedidos) => {

        let monto = 0;

        globalPedidos.map(pedido => {
            monto = monto + pedido.monto;
        });

        setMontoTotal(monto);
    };

    useEffect(() => {
        montoTotalPedido(globalPedidos);
    });

    return (
        <div className="procesar-pedido">
            <form>
                <div className="procesar-pedido-total">
                    <span className="pedido-total-label">TOTAL</span>
                    <span className="pedido-total-label">S/.</span>
                    <span className="pedido-total-monto">{montoTotal}</span>
                </div>
                {/* <div>
                    <button className="procesar-pedido-boton">PROCESAR PEDIDO</button>
                </div> */}
            </form>
        </div>
    )
}

export default ClienteProcesarPedido;
