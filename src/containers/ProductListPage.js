import React, { Component }             from 'react';
import { BrowserRouter, Router, Link }  from "react-router-dom";
import BreadCrumbs                      from '../components/BreadCrumbs/BreadCrumbs';
import Panel                            from "../components/Panel/Panel";
import ListItem                         from '../components/ListItem/ListItem';


export default class ProductListPage extends Component {
    render() {
        const items = [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ];

        return (
            <BrowserRouter>
                <div className="wrapper">
                    <BreadCrumbs/>
                    <div className="content container">
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
                                    <div className="container">
                                        <div className="illustration-v2 margin-bottom-30">
                                            {
                                                items.map((item, index) => {
                                                    return(<ListItem/>);
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <ul className="pagination pagination-v2">
                                        <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                                        <li><a href="#">1</a></li>
                                        <li className="active"><a href="#">2</a></li>
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