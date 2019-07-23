import React, { Component } from 'react';

export default class BillingInfo extends Component {
    render() {
        return (
            <div>
                <div className="header-tags">
                    <div className="overflow-h">
                        <h2>Billing info</h2>
                        <p>Shipping and address infot</p>
                        <i className="rounded-x fa fa-home" />
                    </div>
                </div>
                <section className="billing-info">
                    <div className="row">
                        <div className="col-md-6 md-margin-bottom-40">
                            <h2 className="title-type">Billing Address</h2>
                            <div className="billing-info-inputs checkbox-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input id="name" type="text" placeholder="First Name" name="firstname" className="form-control required" />
                                        <input id="email" type="text" placeholder="Email" name="email" className="form-control required email" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input id="surname" type="text" placeholder="Last Name" name="lastname" className="form-control required" />
                                        <input id="phone" type="tel" placeholder="Phone" name="phone" className="form-control required" />
                                    </div>
                                </div>
                                <input id="billingAddress" type="text" placeholder="Address Line 1" name="address1" className="form-control required" />
                                <input id="billingAddress2" type="text" placeholder="Address Line 2" name="address2" className="form-control required" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input id="city" type="text" placeholder="City" name="city" className="form-control required" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input id="zip" type="text" placeholder="Zip/Postal Code" name="zip" className="form-control required" />
                                    </div>
                                </div>
                                <label className="checkbox text-left">
                                    <input type="checkbox" name="checkbox" />
                                    <i />
                                    Ship item to the above billing address
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="title-type">Shipping Address</h2>
                            <div className="billing-info-inputs checkbox-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input id="name2" type="text" placeholder="First Name" name="firstname" className="form-control" />
                                        <input id="email2" type="text" placeholder="Email" name="email" className="form-control email" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input id="surname2" type="text" placeholder="Last Name" name="lastname" className="form-control" />
                                        <input id="phone2" type="tel" placeholder="Phone" name="phone" className="form-control" />
                                    </div>
                                </div>
                                <input id="shippingAddress" type="text" placeholder="Address Line 1" name="address1" className="form-control" />
                                <input id="shippingAddress2" type="text" placeholder="Address Line 2" name="address2" className="form-control" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <input id="city2" type="text" placeholder="City" name="city" className="form-control" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input id="zip2" type="text" placeholder="Zip/Postal Code" name="zip" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
