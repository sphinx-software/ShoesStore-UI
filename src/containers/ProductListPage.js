import React, { Component } from 'react';
import { BrowserRouter }    from "react-router-dom";
import HeadBanner           from '../components/Banner/HeadBanner';
import Panel                from "../components/Panel/Panel";
import Item                 from '../components/GridItem/Item';
import BreadCrumbs          from "../components/BreadCrumbs/BreadCrumbs";
import propTypes            from "prop-types";

export default class ProductListPage extends Component {

    state = {
        cartItems: []
    };

    componentWillMount() {
        this.setState({
            products: this.props.products
        })
    }

    addToCart(product) {
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        })
    }

    viewDetail() {
        let products      = [...this.state.products];
        const id          = this.props.match.id;
        const viewCarts   = products.find(product => product.id === id)
        this.setState({
            products: viewCarts
        })
    }

    render() {

        const { products } = this.props;

        return (
            <BrowserRouter>
                <div className="wrapper">
                    <HeadBanner/>
                    <div className="content container">
                        <BreadCrumbs page="Products"/>
                        <div className="row">
                            <Panel/>
                            <div className="col-md-9">
                                <div className="row margin-bottom-5">
                                    <div className="col-sm-4 result-category">
                                        <h2>Men</h2>
                                        <small className="shop-bg-red badge-results">45 Results</small>
                                    </div>
                                    <div className="col-sm-8">
                                        <ul className="list-inline clear-both">
                                            <li className="sort-list-btn">
                                                <h3>Sort By :</h3>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        Popularity <span className="caret" />
                                                    </button>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">Best Sales</a></li>
                                                        <li><a href="#">Top Last Week Sales</a></li>
                                                        <li><a href="#">New Arrived</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="sort-list-btn">
                                                <h3>Show :</h3>
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                        20 <span className="caret" />
                                                    </button>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">10</a></li>
                                                        <li><a href="#">5</a></li>
                                                        <li><a href="#">3</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-results">
                                    <div className="row illustration-v2 margin-bottom-30">
                                        {
                                            products.map((product) => {
                                                return(
                                                    <div>
                                                        <Item
                                                            product={product}
                                                            addToCart={ () => this.addToCart(product) }
                                                            viewDetail={ () => this.viewDetail(product) }
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="text-center">
                                    <ul className="pagination pagination-v2">
                                        <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

ProductListPage.propTypes = {
    products: propTypes.object
}

ProductListPage.defaultProps = {
    products: [
        { id: 1,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 2,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 3,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 4,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 5,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 6,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 7,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 8,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 9,  image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 10, image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 11, image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
        { id: 12, image: 'assets/img/blog/31.jpg', name: 'Shoes', gender: 'NAM', price: '100$' },
    ]
}

