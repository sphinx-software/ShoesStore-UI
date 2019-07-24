import React,       { Component } from 'react';
import Quantity                   from '../Quantity/Quantity';
import propTypes                  from 'prop-types';

export default class ShoppingCart extends Component {

    state = {
        quantity: 1,
        totalQuantity: 1
    };

    componentWillMount() {
        this.setState({
            shoppingCart: this.props.shoppingCart
        })
    }

    decrease(index, id) {
        let shoppingCart = [...this.state.shoppingCart];
        const shoppingCartNew = shoppingCart.map(item =>
            (item.id === id)
                ? {...item, quantity: item.quantity > 1 ? --item.quantity : 1}
                : {...item}
        );
        this.setState({
            shoppingCart: shoppingCartNew
        })
    };

    increase(index, id) {
        let shoppingCart = [...this.state.shoppingCart];
        const shoppingCartNew = shoppingCart.map(item =>
            (item.id === id)
                ? {...item, quantity: ++item.quantity}
                : {...item}
        );
        this.setState({
            shoppingCart: shoppingCartNew
        })
    };

    render() {
        const { shoppingCart } = this.state;
        return (
            <div>
                <div className="header-tags">
                    <div className="overflow-h">
                        <h2>Shopping Cart</h2>
                        <p>Review &amp; edit your product</p>
                        <i className="rounded-x fa fa-check" />
                    </div>
                </div>
                <section>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    shoppingCart.map((element, index) =>
                                        <tr key={index}>
                                            <td className="product-in-table">
                                                <img className="img-responsive" src={element.image} alt />
                                                <div className="product-it-in">
                                                    <h3><Double-Breaste></Double-Breaste>{element.name}</h3>
                                                    <span>{element.description}</span>
                                                </div>
                                            </td>
                                            <td>{element.price}</td>
                                            <td>
                                                <Quantity decrease={ () => this.decrease(index, element.id) }
                                                          increase={ () => this.increase(index, element.id) }
                                                          value={ element.quantity }/>
                                            </td>
                                            <td className="shop-red">{ element.price * element.quantity }</td>
                                            <td>
                                                <button type="button" className="close"><span>×</span><span className="sr-only">Close</span></button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }
}

ShoppingCart.propTypes = {
    shoppingCart: propTypes.object
};

ShoppingCart.defaultProps = {
    shoppingCart: [
        {
            id: 1,
            image: 'assets/img/thumb/08.jpg',
            name: 'balo',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },
        {
            id: 2,
            image: 'assets/img/thumb/08.jpg',
            name: 'ao',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },
        {
            id: 3,
            image: 'assets/img/thumb/08.jpg',
            name: 'quan',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },
        {
            id: 4,
            image: 'assets/img/thumb/08.jpg',
            name: 'asdasd',
            description: 'ohyeah',
            price: 1000,
            quantity: 1
        },
    ]
}
