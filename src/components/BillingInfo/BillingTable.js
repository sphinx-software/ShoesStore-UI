import React, { Component } from 'react';
import {Form}               from "react-bootstrap";
import {FormGroup, Input}   from "reactstrap";
import '../../ui/billinginfo/billinginfo.css';

export default class BillingTable extends Component {
    render() {

        const { title } = this.props;

        return(
            <div className="form-css">
                <h4>{title}</h4>
                <div>
                    <Form>
                        <FormGroup className="first-last-name">
                            <Input type="email" placeholder="First Name" />
                            <Input type="email" placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup className="email-phone">
                            <Input type="email" placeholder="Email" />
                            <Input type="email" placeholder="Phone" />
                        </FormGroup>
                        <FormGroup><Input type="email" placeholder="Address line 1" /></FormGroup>
                        <FormGroup><Input type="email" placeholder="Address line 2" /></FormGroup>
                        <FormGroup className="city-zip">
                            <Input type="email" placeholder="City" />
                            <Input type="email" placeholder="Zip/Postal Code" />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}
