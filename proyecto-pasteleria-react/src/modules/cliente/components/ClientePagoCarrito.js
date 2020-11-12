import React from 'react';

const ClientePagoCarrito = () => {
    return (
        <form action="">
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
                        <p>1234.56</p>
                    </div>
                </div>
                <div className="subtitulo_pago">
                    <h5>MÉTODO DE PAGO</h5>
                </div>
            </div>
            <div className="finalizar-pedido">
                <button className="finalizar-pedido-boton">FINALIZAR PEDIDO</button>
            </div>
        </form>
    )
}

export default ClientePagoCarrito;
