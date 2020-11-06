import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClienteState from './context/ClienteState';
import ClienteIndexScreen from './screens/index/ClienteIndexScreen';

const ClienteRouter = () => {
    return (
        <ClienteState>
            <Switch>
                <Route path={"/"} exact component={ClienteIndexScreen} />
            </Switch>
        </ClienteState>
    )
}

export default ClienteRouter;
