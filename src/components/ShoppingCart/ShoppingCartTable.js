import React, { Component } from 'react';
import Quantity             from "../Quantity/Quantity";

export default class ShoppingCartTable extends Component {

    decrease() {
        this.props.decrease();
    };


    increase() {
        this.props.increase();
    };


    remove() {
        this.props.remove();
    };


    render() {

        const { product } = this.props;

        return(
            <tr key={ product.id }>
                <td style={{ width: 100 }}>
                    <img src={ product.image } alt={'text'}/>
                </td>
                <td>
                    <h3>{ product.name }</h3>
                    <p>{ product.description }</p>
                </td>
                <td>{ product.price }</td>
                <td>
                    <Quantity decrease={ () => this.decrease() }
                              increase={ () => this.increase() }
                              value={ product.quantity }/>
                </td>
                <td>{ product.price * product.quantity } $</td>
                <td>
                    <button onClick={ () => this.remove() } type="button" className="close"><span>X</span><span className="sr-only">Close</span></button>
                </td>
            </tr>
        );
    }
}
