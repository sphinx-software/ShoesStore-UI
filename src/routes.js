import React, {Component}           from 'react';
import {Route, Switch}              from "react-router-dom";
<<<<<<< HEAD
import FormLogin                    from "./components/Topbar/FormLogin";
import FormRegister                 from "./components/Topbar/FormRegister";
import Home                         from './views/Home';
=======
import FormLogin                    from "./layouts/Topbar/FormLogin";
import FormRegister                 from "./layouts/Topbar/FormRegister";

import HomePage                     from './containers/HomePage';
import ProductListPage              from './containers/ProductListPage';
import ProductDetailPage            from './containers/ProductDetailPage';
import CheckoutPage                 from "./containers/CheckoutPage";

>>>>>>> develop

export default class RouterProtect extends Component {
    render() {
        return (
            <Switch>
<<<<<<< HEAD
                <Route exact path="/"         component={Home}/>
                <Route exact path="/login"    component={FormLogin}/>
                <Route exact path="/register" component={FormRegister}/>
=======
                <Route exact path="/"                component={HomePage}/>
                <Route exact path="/login"           component={FormLogin}/>
                <Route exact path="/register"        component={FormRegister}/>
                <Route exact path="/products"        component={ProductListPage}/>
                <Route exact path="/products-detail" component={ProductDetailPage}/>
                <Route exact path="/checkout"        component={CheckoutPage}/>
>>>>>>> develop
            </Switch>
        )
    }
}
