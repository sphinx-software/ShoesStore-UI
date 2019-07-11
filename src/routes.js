import React, {Component}           from 'react';
import {Route, Switch}              from "react-router-dom";
import FormLogin                    from "./components/Topbar/FormLogin";
import FormRegister                 from "./components/Topbar/FormRegister";
import Home                         from './views/Home';

export default class RouterProtect extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"         component={Home}/>
                <Route exact path="/login"    component={FormLogin}/>
                <Route exact path="/register" component={FormRegister}/>
            </Switch>
        )
    }
}
