import React, { Component }           from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class BreadCrumbs extends Component {
    render() {
        return(
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>Products</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}
