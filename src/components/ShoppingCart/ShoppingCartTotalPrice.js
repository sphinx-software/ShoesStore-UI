import React, { Component } from 'react';
import {Button, FormGroup, Input, Label, Table} from "reactstrap";
import '../../ui/shoppingcart/shoppingcarttotalprice.css';

export default class ShoppingCartTotalPrice extends Component {

    getTotalPrice() {
        this.props.getTotalPrice();
    };

    render() {
        return(
            <div className="content-father">
                <div className="form-fa">
                    <FormGroup>
                        <Label><h3>Discount Code</h3></Label>
                    </FormGroup>
                    <FormGroup className="content-child">
                        <Input style={{ height: 40, width: 200}} placeholder="Enter your coupon code" />
                        <Button color="success">Apply Coupon</Button>{' '}
                    </FormGroup>
                </div>
                <Table className="table" style={{ width: 200}}>
                    <tbody>
                        <tr>
                            <th><h3>Subtotal:</h3></th>
                            <td><h3>{ this.props.getTotalPrice() }$</h3></td>
                        </tr>
                        <tr>
                            <th><h3>Shipping:</h3></th>
                            <td><h3>----</h3></td>
                        </tr>
                        <tr>
                            <th><h3>Total:</h3></th>
                            <td><h3>{ this.props.getTotalPrice() }$</h3></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}
