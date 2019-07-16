import React, {Component}           from 'react';
import {Route, Switch}              from "react-router-dom";
import FormLogin                    from "./layouts/Topbar/FormLogin";
import FormRegister                 from "./layouts/Topbar/FormRegister";

import HomePage                     from './containers/HomePage';
import ProductListPage              from './containers/ProductListPage';
import ProductDetailPage            from './containers/ProductDetailPage';
import CheckoutPage                 from "./containers/CheckoutPage";


export default class RouterProtect extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"                component={HomePage}/>
                <Route exact path="/login"           component={FormLogin}/>
                <Route exact path="/register"        component={FormRegister}/>
                <Route exact path="/products"        component={ProductListPage}/>
                <Route exact path="/products-detail" component={ProductDetailPage}/>
                <Route exact path="/checkout"        component={CheckoutPage}/>
            </Switch>
        )
    }
}
