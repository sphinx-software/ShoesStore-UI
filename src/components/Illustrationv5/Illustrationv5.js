import React, { Component } from 'react';
import ThumbProduct from '../GridItem/ThumbProduct';
import Nav from "reactstrap/es/Nav";

export default class Illustrationv5 extends Component {
    render() {

        return (
            <Nav>
                <div className="row illustration-v4 margin-bottom-40">
                    <div className="col-md-4">
                        <div className="heading heading-v1 margin-bottom-20">
                            <h2>Top Rated</h2>
                        </div>
                        <ThumbProduct/>
                        <ThumbProduct/>
                        <ThumbProduct/>
                    </div>
                    <div className="col-md-4">
                        <div className="heading heading-v1 margin-bottom-20">
                            <h2>Best Sellers</h2>
                        </div>
                        <ThumbProduct/>
                        <ThumbProduct/>
                        <ThumbProduct/>
                    </div>
                    <div className="col-md-4 padding">
                        <div className="heading heading-v1 margin-bottom-20">
                            <h2>Sale Items</h2>
                        </div>
                        <ThumbProduct/>
                        <ThumbProduct/>
                        <ThumbProduct/>
                    </div>
                </div>
            </Nav>
        );
    }
}
