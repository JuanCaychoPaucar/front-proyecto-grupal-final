import React from 'react'
import ClienteContext from './ClienteContext';

const ClienteState = (props) => {
    return (
        <ClienteContext.Provider value={
            
        }>
            {props.children}
        </ClienteContext.Provider>
    )
}

export default ClienteState;
