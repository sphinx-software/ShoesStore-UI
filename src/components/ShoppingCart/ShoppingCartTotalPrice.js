import React, { Component } from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";

export default class ShoppingCartTotalPrice extends Component {

    getTotalPrice() {
        this.props.getTotalPrice()
    };


    render() {
        return(
            <div>
                <hr/>
                <div>
                    <FormGroup>
                        <Label for="exampleEmail"><h3>Discount Code</h3></Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your coupon code" />
                    </FormGroup>
                    <Button color="success">Apply Coupon</Button>{' '}
                </div>

                <hr/>

                <div>
                    <h4><strong>Subtotal:</strong></h4>
                    <p>$ { this.props.getTotalPrice() }</p>
                    <h4><strong>Shipping:</strong></h4>
                    <p>----</p>
                    <h4><strong>Total:</strong></h4>
                    <p>$ { this.props.getTotalPrice() }</p>
                </div>
            </div>
        );
    }
}
