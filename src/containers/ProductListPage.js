import React, { Component }                           from 'react';
import { BrowserRouter }                              from "react-router-dom";
import HeadBanner                                     from '../components/Banner/HeadBanner';
import Panel                                          from "../components/Panel/Panel";
import Item                                           from '../components/GridItem/Item';
import BreadCrumbs                                    from "../components/BreadCrumbs/BreadCrumbs";
import propTypes                                      from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Nav                                            from "reactstrap/es/Nav";
import                                                     '../ui/pagination/pagination.css';


export default class ProductListPage extends Component {

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
                                    <div className="row illustration-v2 margin-bottom-30">
                                        {
                                            products.map((product) => {
                                                return(
                                                    <div>
                                                        <Item product={product}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="pagination-pagin">
                                    <Pagination size="lg" aria-label="Page navigation example">
                                        <PaginationItem>
                                            <PaginationLink first href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink previous href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                2
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink href="#">
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink next href="#" />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink last href="#" />
                                        </PaginationItem>
                                    </Pagination>
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
        { id: 1,  image: 'assets/img/blog/40.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 2,  image: 'assets/img/blog/41.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 3,  image: 'assets/img/blog/42.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 4,  image: 'assets/img/blog/43.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 5,  image: 'assets/img/blog/44.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 6,  image: 'assets/img/blog/45.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 7,  image: 'assets/img/blog/46.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 8,  image: 'assets/img/blog/47.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 9,  image: 'assets/img/blog/48.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 10, image: 'assets/img/blog/49.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 11, image: 'assets/img/blog/50.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
        { id: 12, image: 'assets/img/blog/40.jpg', name: 'Shoes', gender: 'NAM', price: '100$', quantity: 1 },
    ]
}

