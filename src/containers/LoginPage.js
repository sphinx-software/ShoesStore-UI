import React, { Component } from 'react';

import FormLogin            from "../components/Form/FormLogin";
import HeadBanner           from "../components/Banner/HeadBanner";

export default class LoginPage extends Component {
    render() {
        return(
            <div>
                <HeadBanner/>
                <FormLogin/>
            </div>
        );
    }
}
