import React, { Component } from 'react';

export default class Quantity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    };

    decrease() {
        this.setState({
            value: this.state.value > 1 ? --this.state.value : 1
        })
    };

    increase() {
        this.setState({
            count: ++this.state.value
        })
    };


    render() {
        return(
            <div>
                <button type="button" className="quantity-button" name="subtract" onClick={ () => this.decrease() }
                        value="-">-
                </button>
                <input type="text" className="quantity-field" name="qty" value={this.state.value} id="qty"/>
                <button type="button" className="quantity-button" name="add"
                        onClick={ () => this.increase() } value="+">+
                </button>
            </div>
        );
    }
}



