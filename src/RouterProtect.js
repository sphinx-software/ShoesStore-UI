import React, {Component} from 'react';
import FormLogin          from "./components/Auth/FormLogin";
import FormRegist         from "./components/Auth/FormRegist";
import Home               from "./components/Home";
import Productdetail from "./components/Product/Productdetail";
import { Route, Switch }  from "react-router-dom";




class RouterProtect extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"         component={Home}/>
                <Route exact path="/login"    component={FormLogin}/>
                <Route exact path="/regist"   component={FormRegist}/>
                <Route exact path="/products" component={Productdetail}/>

            </Switch>
        )
    }
}
export default RouterProtect;
