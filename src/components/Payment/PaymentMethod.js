import React, { Component }      from 'react';
import {Accordion, Card}         from "react-bootstrap";
import {FormGroup, Input, Label} from "reactstrap";
import {Icon}                    from "@blueprintjs/core";
import '../../ui/payment/paymentmethod.css';
import Nav from "reactstrap/es/Nav";
import NavLink from "reactstrap/es/NavLink";

export default class PaymentMethod extends Component {
    render() {
        return(
           <Nav>
               <Accordion defaultActiveKey="0">
                   <Card>
                       <Accordion.Toggle as={Card.Header} eventKey="0">
                           <h4><Icon icon="credit-card"/>  Credit or Debit Card</h4>
                       </Accordion.Toggle>
                       <Accordion.Collapse eventKey="0">
                           <FormGroup>
                               <div className="credit-1">
                                   <Label for="exampleEmail"><h4>Cardholder Name</h4></Label>
                                   <Input type="email" />
                               </div>
                               <div className="credit-2">
                                   <Label for="exampleEmail"><h4>Card Number</h4></Label>
                                   <Input type="email" />
                               </div>
                               <div className="credit-3">
                                   <Label for="exampleEmail"><h4>Payment Types</h4></Label>
                                   <div className="credit-3-1">
                                       <img src={require('../../img/card/paypal.gif')} alt={'text'}/>
                                       <img src={require('../../img/card/mastercard.gif')} alt={'text'}/>
                                       <img src={require('../../img/card/visa.gif')} alt={'text'}/>
                                   </div>
                               </div>
                               <div className="credit-4">
                                   <Label for="exampleEmail"><h4>Expiration Date</h4></Label>
                                   <div className="credit-4-1">
                                       <Input type="email" placeholder="MM" />
                                       <Input type="email" placeholder="YY" />
                                   </div>
                               </div>
                               <div className="credit-5">
                                   <Label for="exampleEmail"><h4>CSCs</h4></Label>
                                   <Input type="email" />
                                   <br/>
                                   <NavLink>What's this?</NavLink>
                               </div>
                           </FormGroup>
                       </Accordion.Collapse>
                   </Card>
                   <Card>
                       <Accordion.Toggle as={Card.Header} eventKey="1">
                           <h4><Icon icon="credit-card"/>  Pay with Paypal</h4>
                       </Accordion.Toggle>
                       <Accordion.Collapse eventKey="1">
                           <FormGroup>
                               <img src={require('../../img/card/PayPal.png')} style={{ height: 200, width: 300 }} alt={'text'} />
                           </FormGroup>
                       </Accordion.Collapse>
                   </Card>
               </Accordion>
           </Nav>
        );
    }
}
