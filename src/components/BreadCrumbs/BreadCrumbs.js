import React, { Component } from 'react';

export default class BreadCrumbs extends Component {
    render() {
        return(
            <div className="breadcrumbs-v4">
                <div className="container">
                    <span className="page-name">Product Filter Page</span>
                    <h1>Maecenas <span className="shop-green">enim</span> sapien</h1>
                    <ul className="breadcrumb-v4-in">
                        <li><a href="index.html">Home</a></li>
                        <li><a href>Product</a></li>
                        <li className="active">Product Filter Page</li>
                    </ul>
                </div>{/*/end container*/}
            </div>
        );
    }
}