import React, { useContext, useEffect, useState } from 'react';
import ClienteContext from '../context/ClienteContext';

const ClienteProcesarPedido = () => {

    const { globalPedidos, estadoBotonProcesar, botonProcesar } = useContext(ClienteContext);
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

    useEffect(() => {
        if (globalPedidos.length === 0) {
            botonProcesar(true);
        } else {
            botonProcesar(false);
        }

    }, [globalPedidos]);

    return (
        <div className="procesar-pedido">
            <form>
                <div className="procesar-pedido-total">
                    <span className="pedido-total-label">TOTAL</span>
                    <span className="pedido-total-label">S/.</span>
                    <span className="pedido-total-monto">{montoTotal}</span>
                </div>

                <div>
                    <button
                        className={estadoBotonProcesar ? "procesar-pedido-boton boton-desactivado" : "procesar-pedido-boton"}
                        type="button"
                        disabled={estadoBotonProcesar}
                        onClick={() => {

                        }}
                    >
                        PROCESAR PEDIDO
                        </button>
                </div>
            </form>
        </div>
    )
}

export default ClienteProcesarPedido;
