const ClienteReducer = (stateActual, action) => {

    // switch (action.type) {
    //     case "SELECCIONAR_MESA":
    //         return {
    //             ...stateActual,
    //             globalObjMesa: { ...action.data },
    //         }

    //     case "SELECCIONAR_CATEGORIA":
    //         return {
    //             ...stateActual,
    //             globalObjCategoria: { ...action.data },
    //         }

    //     case "ACTUALIZAR_GLOBAL_PEDIDOS":
    //         return {
    //             ...stateActual,
    //             globalPedidos: [ ...action.data ],
    //         }
    // }
};

export default ClienteReducer;

/**
 * stateActual, es el estado actual de la variable de estado que se quiere modificar, que viene del ClienteState.
 * action, es lo que se recibe del dispatch que se encuentra en ClienteState.
 * TODO lo que retorna ClienteReducer es el nuevo valor o valor de reemplazo de mi variable de estado.
 */