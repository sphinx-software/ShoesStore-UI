import React, { Component }                                                   from 'react';
import { BrowserRouter }                                                      from "react-router-dom";
import HeadBanner                                                             from '../components/Banner/HeadBanner';
import Panel                                                                  from "../components/Panel/Panel";
import BreadCrumbs                                                            from "../components/BreadCrumbs/BreadCrumbs";
import propTypes                                                              from "prop-types";
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Nav                                                                    from "reactstrap/es/Nav";
import NavLink                                                                from "reactstrap/es/NavLink";
import { connect }                                                            from "react-redux";
import { addToCart }                                                          from "../actions/actions";
import Pagination                                                             from "react-js-pagination";
import                                                                             '../ui/item/item.css';
import                                                                             '../ui/pagination/pagination.css';


class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {

        const { products } = this.props;
        console.log('products',products);

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
                                                        <li><Nav href="#">All</Nav></li>
                                                        <li><Nav href="#">Best Sales</Nav></li>
                                                        <li><Nav href="#">Top Last Week Sales</Nav></li>
                                                        <li><Nav href="#">New Arrived</Nav></li>
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
                                                        <li><Nav href="#">All</Nav></li>
                                                        <li><Nav href="#">10</Nav></li>
                                                        <li><Nav href="#">5</Nav></li>
                                                        <li><Nav href="#">3</Nav></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="filter-results">
                                    {/* Item */}
                                        <div className="row illustration-v2 margin-bottom-30">
                                            {
                                                products.map((product) => {
                                                    return (
                                                        <div className="col-md-4">
                                                            <Card className="card">
                                                                <CardImg top width="100%" src={product.image} alt="Card image cap" />
                                                                <CardBody>
                                                                    <div className="name">
                                                                        <CardTitle><h3><NavLink>{product.name}</NavLink></h3></CardTitle>
                                                                    </div>
                                                                    <div className="gender">
                                                                        <CardSubtitle>{product.gender}</CardSubtitle>
                                                                    </div>
                                                                    <div className="price">
                                                                        <CardText><h3>{product.price}$</h3></CardText>
                                                                    </div>
                                                                    <div className="flex">
                                                                        <Button color="primary" className="quick-review"><NavLink href={`/products/${product.id}`}>Quick review</NavLink></Button>{' '}
                                                                        <Button color="success" onClick={ () => this.props.addToCart(product) } className="add-cart"><NavLink>Add to cart</NavLink></Button>{' '}
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </div>
                                                    )}
                                                )
                                            }
                                        </div>
                                    {/* End Item */}
                                </div>
                                <div className="pagination-pagin">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={6}
                                        totalItemsCount={450}
                                        pageRangeDisplayed={5}
                                        onChange={this.handlePageChange}
                                        />
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
        { id: 1,  image: 'assets/img/blog/40.jpg', name: 'Shoes', gender: 'NAM', price: 100, quantity: 1, categories : 'maytinh' },
    ]
}

const mapStateToProps = (state) => {
    return {
        products        : state.Cart.products,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListPage);
