import React from 'react';

const ClienteProcesarPedido = () => {
    return (
        <div className="procesar-pedido">
            <form>
                <div className="procesar-pedido-total">
                    <span className="pedido-total-label">TOTAL</span>
                    <span className="pedido-total-label">S/.</span>
                    <span className="pedido-total-monto">1234.56</span>
                </div>
                <div>
                    <button className="procesar-pedido-boton">PROCESAR PEDIDO</button>
                </div>
            </form>
        </div>
    )
}

export default ClienteProcesarPedido;
