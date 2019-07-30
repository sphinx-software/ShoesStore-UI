import React, { Component } from 'react';
import FormBillingService from '../Form/FormBillingService';

export default class BillingInfo extends Component {
    render() {
        return (
            <div>
                <div className="header-tags">
                    <div className="overflow-h">
                        <h2>Billing info</h2>
                        <p>Shipping and address info</p>
                    </div>
                </div>
                <section className="billing-info">
                    <div className="row">
                        <div className="col-md-6 md-margin-bottom-40">
                            <h2 className="title-type">Billing Address</h2>
                            <FormBillingService/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="title-type">Shipping Address</h2>
                            <FormBillingService/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
