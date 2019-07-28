import React, { Component }           from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class BreadCrumbs extends Component {
    render() {

        const { page } = this.props;

        return(
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>{page}</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}
