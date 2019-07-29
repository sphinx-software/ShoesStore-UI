import React, {Component}         from 'react';
import { Route, Switch }          from 'react-router-dom';
import LoginPage                  from './containers/LoginPage';
import RegisterPage               from "./containers/RegisterPage";
import HomePage                   from './containers/HomePage';
import ProductListPage            from './containers/ProductListPage';
import ProductDetailPage          from './containers/ProductDetailPage';
import CheckoutPage               from './containers/CheckoutPage';


export default class RouterProtect extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/"               component={HomePage}/>
                <Route exact path="/login"          component={LoginPage}/>
                <Route exact path="/register"       component={RegisterPage}/>
                <Route exact path="/products"       component={ProductListPage}/>
                <Route exact path="/products/:id"   component={ProductDetailPage}/>
                <Route exact path="/checkout"       component={CheckoutPage}/>
            </Switch>
        )
    }
}
