import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Poleras from '../pages/Poleras';
import Pantalones from '../pages/Pantalones';
import Chaquetas from "../pages/Chaquetas";
import Login from '../pages/Login';
import Contacto from '../pages/Contacto';

function AppRouter() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/poleras" component={Poleras} />
            <Route path="/pantalones" component={Pantalones} />
            <Route path="/chaquetas" component={Chaquetas} />
            <Route path="/login" component={Login} />
            <Route path="/contacto" component={Contacto} />
        </Switch>
    )
}

export default AppRouter;