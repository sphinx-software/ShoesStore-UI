import React, { Component } from 'react';

export default class IconCart extends Component {

    remove() {
        this.props.remove();
    }

    render() {
        const { product } = this.props;
        return(
            <li>
                <img src={product.image}/>
                <button onClick={ () => this.remove() } type="button" className="close"><span>X</span><span className="sr-only">Close</span></button>
                <div className="overflow-h">
                    <span>{product.name}</span>
                    <small>{product.price}$ x {product.quantity}</small>
                </div>
            </li>
        )
    }
}
