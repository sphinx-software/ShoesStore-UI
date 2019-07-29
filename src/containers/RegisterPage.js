import React, { Component } from 'react';
import HeadBanner           from "../components/Banner/HeadBanner";
import FormRegister         from "../components/Form/FormRegister";

export default class RegisterPage extends Component {
    render() {
        return(
            <div>
                <HeadBanner/>
                <FormRegister/>
            </div>
        );
    }
}
