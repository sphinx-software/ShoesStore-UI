import React, { Component }             from 'react';
import { BrowserRouter, Router, Link }  from "react-router-dom";
import BreadCrumbs                      from '../components/BreadCrumbs/BreadCrumbs';
import Panel                            from "../components/Panel/Panel";
import ListItem                         from '../components/ListItem/ListItem';


export default class ProductListPage extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    {/*=== Breadcrumbs v4 ===*/}
                        <BreadCrumbs/>
                    {/*=== End Breadcrumbs v4 ===*/}
                    {/*=== Content Part ===*/}
                        <div className="content container">
                            <div className="row">
                                <Panel/>
                                <ListItem/>
                            </div>
                        </div>
                    {/*=== End Content Part ===*/}
                    {/*=== Footer ===*/}
                </div>
            </BrowserRouter>
        );
    }
}