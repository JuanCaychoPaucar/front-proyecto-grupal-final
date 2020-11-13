import React, { useContext, useEffect, useState } from 'react';
import ClienteContext from '../context/ClienteContext';

const ClientePagoCarrito = () => {

    const { globalPedidos, finalizarPedido } = useContext(ClienteContext);
    const [montoTotal, setMontoTotal] = useState(0);

    const montoTotalPedido = (globalPedidos) => {

        let monto = 0;

        globalPedidos.map(pedido => {
            monto = monto + pedido.monto;
        });

        setMontoTotal(monto);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        finalizarPedido();
    }



    useEffect(() => {
        montoTotalPedido(globalPedidos);
    }, [globalPedidos]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="contenido_pago">
                <div className="titulo_pago">
                    <h5>MI PEDIDO</h5>
                </div>
                <div className="total_pago">
                    <div className="totales">
                        <p>Total</p>
                    </div>
                    <div className="detalle">
                        <p>S/.</p>
                        <p>{montoTotal}</p>
                    </div>
                </div>
                <div className="subtitulo_pago">
                    <h5>MÉTODO DE PAGO</h5>
                </div>
            </div>
            <div className="finalizar-pedido">
                <button
                    className="finalizar-pedido-boton"
                    type="submit"
                >
                    FINALIZAR PEDIDO
                </button>
            </div>
        </form>
    )
}

export default ClientePagoCarrito;
