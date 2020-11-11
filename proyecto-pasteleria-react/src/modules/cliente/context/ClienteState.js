import React, { useReducer } from 'react'
import { getCategorias } from '../../../services/categoriaService';
import { getProductos } from '../../../services/productoService';
import ClienteContext from './ClienteContext';
import ClienteReducer from './ClienteReducer';

const ClienteState = (props) => {

    const [state, dispatch] = useReducer(ClienteReducer, {
        globalObjProductos: null,
        globalObjCategorias: null,
    });

    // OBTENER LA LISTA DE TODOS LOS PRODUCTOS Y CATEGORIAS, LUEGO ASOCIARLOS
    const traerProductosAndCategorias = async () => {
        const { globalObjProductos, globalObjCategorias } = state;

        // verificar que los objetos globales no esten vacios
        // if(globalObjProductos.lenght )






    };


    return (
        <ClienteContext.Provider value={{
            globalObjProductos: state.globalObjProductos,
            globalObjCategorias: state.globalObjCategorias,
        }}>
            {props.children}
        </ClienteContext.Provider>
    )
}

export default ClienteState;

// ClienteState nos retorna un context
