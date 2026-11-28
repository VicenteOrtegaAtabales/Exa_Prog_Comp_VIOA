import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Poleras from '../pages/Poleras';
import Pantalones from '../pages/Pantalones';
import Chaquetas from "../pages/Chaquetas";
import Login from '../pages/Login';
import Contacto from '../pages/Contacto';
import Carrito from '../pages/Carrito';

function AppRouter({ carrito, setCarrito }) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/poleras" render={() => (
                <Poleras
                   carrito={carrito}
                   setCarrito={setCarrito}
             />
            )} 
            />
        
            <Route path="/pantalones" render={() => (
                <Pantalones
                   carrito={carrito}
                   setCarrito={setCarrito}
             />
            )} 
            />

            <Route path="/chaquetas" render={() => (
                <Chaquetas
                   carrito={carrito}
                   setCarrito={setCarrito}
             />
            )} 
            />

            <Route path="/carrito" render={() => (
                <Carrito
                   carrito={carrito}
             />
            )} 
            />
            
            <Route path="/login" component={Login} />
            <Route path="/contacto" component={Contacto} />
        </Switch>
    )
}

export default AppRouter;