import React, { Component } from 'react';

export default class PaymentMethod extends Component {
    render() {
        return(
            <div>
                <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                    <i className="fa fa-credit-card" />
                                    Credit or Debit Card
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in">
                            <div className="panel-body cus-form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-4 no-col-space control-label">Cardholder Name</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control required" name="cardholder" placeholder />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 no-col-space control-label">Card Number</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control required" name="cardnumber" placeholder />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 no-col-space control-label">Payment Types</label>
                                    <div className="col-sm-8">
                                        <ul className="list-inline payment-type">
                                            <li><i className="fa fa-cc-paypal" /></li>
                                            <li><i className="fa fa-cc-visa" /></li>
                                            <li><i className="fa fa-cc-mastercard" /></li>
                                            <li><i className="fa fa-cc-discover" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4">Expiration Date</label>
                                    <div className="col-sm-8 input-small-field">
                                        <input type="text" name="mm" placeholder="MM" className="form-control required sm-margin-bottom-20" />
                                        <span className="slash">/</span>
                                        <input type="text" name="yy" placeholder="YY" className="form-control required" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-4 no-col-space control-label">CSC</label>
                                    <div className="col-sm-8 input-small-field">
                                        <input type="text" name="number" placeholder className="form-control required" />
                                        <a href="#">What's this?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    <i className="fa fa-paypal" />
                                    Pay with PayPal
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="content margin-left-10">
                                <a href="#"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png" alt="PayPal" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
