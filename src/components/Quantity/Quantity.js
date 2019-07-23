import React, { Component } from 'react';

export default class Quantity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    };

    decrease() {
        this.props.decrease();
    };

    increase() {
        this.props.increase();
    };


    render() {
        return(
            <div>
                <button type="button" className="quantity-button" name="subtract" onClick={ () => this.decrease() }
                        value="-">-
                </button>
                <input type="text" className="quantity-field" name="qty" value={this.props.value} id="qty"/>
                <button type="button" className="quantity-button" name="add"
                        onClick={ () => this.increase() } value="+">+
                </button>
            </div>
        );
    }
}



