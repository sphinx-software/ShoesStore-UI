import React, { Component } from 'react';
import BillingTable         from "./BillingTable";
import '../../ui/billinginfo/billinginfo.css';

export default class BillingInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="header-tags">
                        <div className="overflow-h">
                            <h2>Billing Info</h2>
                            <p>Shipping and address info</p>
                        </div>
                    </div>
                </div>
                <div className="billing-shipping">
                    <BillingTable title="BILLING ADDRESS"/>
                    <BillingTable title="SHIPPING ADDRESS"/>
                </div>
            </div>
        );
    }
}
