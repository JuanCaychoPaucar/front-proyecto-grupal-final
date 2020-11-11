import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClienteState from './context/ClienteState';
import ClienteCarritoScreen from './screens/carrito/ClienteCarritoScreen';
import ClienteIndexScreen from './screens/index/ClienteIndexScreen';
import ClienteProductoScreen from './screens/producto/ClienteProductoScreen';

const ClienteRouter = () => {
    return (
        <ClienteState>
            <Switch>
                <Route path={"/productos"} component={ClienteProductoScreen} />
                <Route path={"/carrito"} component={ClienteCarritoScreen} />
                <Route path={"/"} exact component={ClienteIndexScreen} />
            </Switch>
        </ClienteState>
    )
}

export default ClienteRouter;
