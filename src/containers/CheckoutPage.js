import React,       { Component }       from 'react';
import              { BrowserRouter }   from "react-router-dom";
import HeadBanner                       from '../components/Banner/HeadBanner';
import ShoppingCart                     from "../components/ShoppingCart/ShoppingCart";
import BillingInfo                      from "../components/BillingInfo/BillingInfo";
import Payment                          from "../components/Payment/Payment";
import {Button}                         from "reactstrap";


export default class CheckoutPage extends Component {

    state = {
        index: 1
    };

    previous() {
        this.setState({
            index: this.state.index > 1 ? --this.state.index : 1
        })
    };

    next() {
        this.setState( {
            index: this.state.index < 3 ? ++this.state.index : 3
        })
    };

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <HeadBanner/>
                    <div className="content-md margin-bottom-30">
                        <div className="container">
                            <form className="shopping-cart" action="#">
                                <div>

                                    { this.state.index === 1 && <ShoppingCart/> }

                                    { this.state.index === 2 && <BillingInfo/> }

                                    { this.state.index === 3 && <Payment/> }

                                </div>
                            </form>
                        </div>
                    </div>
                    <hr className="container"/>
                    <center>
                        <div>
                            <Button onClick={ () => this.previous() } color="success">Previous</Button>{' '}
                            <Button onClick={ () => this.next() } color="success">Next</Button>{' '}
                        </div>
                    </center>
                </div>
                <hr className="container"/>
            </BrowserRouter>
        );
    }
}
