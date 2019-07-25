import React, { Component }           from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class BreadCrumbs extends Component {
    render() {
        return(
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/">Product</a></BreadcrumbItem>
                    <BreadcrumbItem active>Product Filter Page</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}
