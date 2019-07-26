import React, { Component } from 'react';

export default class HeadBanner extends Component {
    render() {
        return(
            <div className="breadcrumbs-v4">
                <div className="container">
                    <span className="page-name">Product Filter Page</span>
                    <h1>Maecenas <span className="shop-green">enim</span> sapien</h1>
                </div>
            </div>
        );
    }
}
