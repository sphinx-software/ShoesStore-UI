import React, { Component } from 'react';

export default class IconCart extends Component {

    remove() {
        this.props.remove();
    }

    render() {
        const { image, name, price, quantity } = this.props;
        return(
            <li>
                <img src={image} alt />
                <button onClick={ () => this.remove() } type="button" className="close"><span>X</span><span className="sr-only">Close</span></button>
                <div className="overflow-h">
                    <span>{name}</span>
                    <small>{price}$ x {quantity}</small>
                </div>
            </li>
        )
    }
}

