import React, {Component}           from 'react';
import {Route, Switch}              from "react-router-dom";
import FormLogin                    from "./components/Topbar/FormLogin";
import FormRegister                 from "./components/Topbar/FormRegister";

import HomePage                     from './containers/HomePage';
import ProductListPage              from './containers/ProductListPage';


export default class RouterProtect extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"         component={HomePage}/>
                <Route exact path="/login"    component={FormLogin}/>
                <Route exact path="/register" component={FormRegister}/>
                <Route exact path="/products" component={ProductListPage}/>
            </Switch>
        )
    }
}
