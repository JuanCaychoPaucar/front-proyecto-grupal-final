import React, { useReducer } from 'react'
import { getCategorias } from '../../../services/categoriaService';
import { getProductos } from '../../../services/productoService';
import ClienteContext from './ClienteContext';
import ClienteReducer from './ClienteReducer';
import moment from "moment";
import { postPedido } from '../../../services/pedidoService';
import { postPedidoProducto } from '../../../services/pedidoproductoService';

// item del objeto producto
const productoItems = {
    "producto_id": 1,
    "categoria_id": 1,
    "categoria_nombre": "categoria nombre",
    "producto_nom": "producto_nom post",
    "producto_pre": 120,
    "producto_img": "producto_img post",
    "producto_estado": true
};

// items del arreglo de pedidos
const arregloPedido = [
    {
        "producto_id": 1,
        "categoria_id": 1,
        "categoria_nombre": "categoria nombre",
        "producto_nom": "producto_nom post",
        "producto_pre": 120,
        "producto_img": "producto_img post",
        "producto_estado": true,

        "cantidad": 123,
        "monto": 123,
    }
];

// tabla pedido
const pedido = {
    "pedido_id": "1",
    "cliente_id": 1,
    "pedido_fecha": moment().format("YYYY-MM-DD HH:mm:ss"),
    "pedido_monto": 87,
    "pedido_pagado": false,
    "pedido_insumo": false,
    "pedido_preparacion": false,
    "pedido_terminado": false,
    "pedido_despacho": false,
    "pedido_entregado": false
}



const ClienteState = (props) => {

    const [state, dispatch] = useReducer(ClienteReducer, {
        globalPedidos: [],
    });

    // SCREEN PRODUCTOS: AGREGAR PRODUCTO
    const agregarProducto = (objProducto) => {

        // desestructurando state
        const { globalPedidos } = state;

        // verificar si existe un pedido para el producto seleccionado
        const pedidoActual = globalPedidos.find(objPedido => objPedido.producto_id === objProducto.producto_id);
        console.log(pedidoActual);

        // preguntamos si el pedido actual existe, es decir, que la mesa global seleccionada tenga un pedido previamnete en nuestro arreglo "globalPedidos"
        if (pedidoActual) {
            // ya existia el producto en el arreglo de pedidos: globalPedidos
            const modificarPedido = globalPedidos.map(objPedido => {
                if (objPedido.producto_id === objProducto.producto_id) {
                    return {
                        ...objProducto,
                    }
                }
                return {
                    ...objPedido,
                }
            });

            dispatch({
                type: "ACTUALIZAR_GLOBAL_PEDIDOS",
                data: modificarPedido,
            });

        } else {
            // No exisitia el producto en el arreglo de pedidos: globalPedidos
            // Por tanto, debemos de crear el pedido nuevo, en el arreglo global de pedidos
            const nuevoGlobalPedidos = [
                ...globalPedidos,
                {
                    ...objProducto,
                },
            ];

            dispatch({
                type: "ACTUALIZAR_GLOBAL_PEDIDOS",
                data: nuevoGlobalPedidos,
            });

        }

    };

    // ELIMINAR PRODUCTO DE CARRITO
    const eliminarProducto = (id) => {

        console.log("id enviado");
        console.log(id);

        const { globalPedidos } = state;

        let temporal = [...globalPedidos];

        temporal = temporal.filter(pedido => {
            if (pedido.producto_id == id) {
                return undefined;
            } else {
                return pedido;
            }
        });

        console.log("TEMPORAL");
        console.log(temporal);

        dispatch({
            type: "ELIMINAR_PRODUCTO",
            data: temporal,
        });

    };


    // FINALIZAR PEDIDO
    const finalizarPedido = () => {

        const { globalPedidos } = state;

        let monto = 0;

        globalPedidos.map(pedido => {
            monto = monto + pedido.monto;
        });

        let objPedido = {
            cliente_id: 1,
            pedido_fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
            pedido_monto: monto,
            pedido_pagado: true,
            pedido_insumo: false,
            pedido_preparacion: false,
            pedido_terminado: false,
            pedido_despacho: false,
            pedido_entregado: false
        };


        let pedidoProductoItems = globalPedidos.map(pedido => {
            return {
                producto_id: pedido.producto_id,
                cantidad: pedido.cantidad,
                precio: pedido.producto_pre,
                monto: pedido.monto,
            }
        });


        let objPedidoProducto = {
            pedido_id: 2,
            pedidoproducto_items: [...pedidoProductoItems],
        }

        console.log("objeto pedido producto");
        console.log(objPedidoProducto);


        postPedido(objPedido).then(data => {
            console.log("RESPUESTA DEL SERVIDOR TABLA PEDIDO");
            console.log(data);

            if (data.pedido_id) {

                let nuevoObjPedidoProducto = {
                    ...objPedidoProducto,
                    pedido_id: data.pedido_id,
                };

                postPedidoProducto(nuevoObjPedidoProducto).then(data => {
                    console.log("RESPUESTA DEL SERVIDOR TABLA PEDIDO_PRODUCTO");
                    console.log(data);

                    if (data.pedidoproducto_id) {

                        const nuevoGlobalPedidos = [];

                        console.log("RESET GLOBAL PEDIDOS");
                        console.log(nuevoGlobalPedidos);

                        dispatch({
                            type: "FINALIZAR_PEDIDO",
                            data: nuevoGlobalPedidos,
                        });
                    }

                })

            } else {
                // error al procesar el pedido
            }
        });


    };



    return (
        <ClienteContext.Provider value={{
            globalPedidos: state.globalPedidos,
            agregarProducto: agregarProducto,
            eliminarProducto: eliminarProducto,
            finalizarPedido: finalizarPedido,
        }}>
            {props.children}
        </ClienteContext.Provider>
    )
}

export default ClienteState;

// ClienteState nos retorna un context
