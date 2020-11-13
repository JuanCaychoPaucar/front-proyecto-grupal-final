import React, { useReducer } from 'react'
import { getCategorias } from '../../../services/categoriaService';
import { getProductos } from '../../../services/productoService';
import ClienteContext from './ClienteContext';
import ClienteReducer from './ClienteReducer';

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
const pedido = [
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



    return (
        <ClienteContext.Provider value={{
            globalPedidos: state.globalPedidos,
            agregarProducto: agregarProducto,
            eliminarProducto: eliminarProducto,
        }}>
            {props.children}
        </ClienteContext.Provider>
    )
}

export default ClienteState;

// ClienteState nos retorna un context
