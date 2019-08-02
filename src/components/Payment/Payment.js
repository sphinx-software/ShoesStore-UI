import React, { Component } from 'react';
import PaymentMethod        from "./PaymentMethod";
import FrequentyQuestions   from "./FrequentyQuestions";

export default class Payment extends Component {
    render() {
        return(
            <div>
                <div className="header-tags">
                    <div className="overflow-h">
                        <h2>Payment</h2>
                        <p>Select Payment method</p>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-6 md-margin-bottom-50">
                            <h2 className="title-type">Choose a payment method</h2>
                                <PaymentMethod/>
                        </div>
                        <div className="col-md-6">
                            <h2 className="title-type">Frequently asked questions</h2>
                                <FrequentyQuestions
                                    title="What payments methods can I use?"
                                    content="Content"
                                />
                                <FrequentyQuestions
                                    title="Can I use gift card to pay for my purchase"
                                    content="Content"
                                />
                                <FrequentyQuestions
                                    title="Will I be charged when I place my order?"
                                    content="Content"
                                />
                                <FrequentyQuestions
                                    title="How long will it take to get my order"
                                    content="Content"
                                />
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
