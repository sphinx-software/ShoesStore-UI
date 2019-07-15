import React, { Component } from 'react';
import ProductItem          from '../GridItem/ProductItem';


export default class ListItem extends Component {
    render() {
        return (
            <div className="list-inline owl-slider">
                <ProductItem/>
            </div>
        );
    }
}
