import React, { Component } from 'react';

export default class FormBillingService extends Component {
    render() {
        return(
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
                
            </div>
        )
    }
}