import React from 'react'
import ClienteContext from './ClienteContext';

const ClienteState = (props) => {
    return (
        <ClienteContext.Provider value={
            {
                prueba: "Texto de prueba",
            }
        }>
            {props.children}
        </ClienteContext.Provider>
    )
}

export default ClienteState;
