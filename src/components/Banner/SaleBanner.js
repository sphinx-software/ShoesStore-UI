import React, { Component } from 'react';
import Nav                  from "reactstrap/es/Nav";
import { Card, CardImg }    from 'reactstrap';
import propTypes            from 'prop-types';

export default class SaleBanner extends Component {
    render() {

        const { banner } = this.props;

        return (             
            <div className="col-md-6 md-margin-bottom-30">
                <div className="overflow-h">
                    <Nav className="illustration-v1" href="#">
                        <Card className="card">
                            <CardImg top width="100%" src={banner.img} alt="Card image cap" />
                        </Card>
                    </Nav>
                </div>
            </div>
        );
    }
}

SaleBanner.propTypes = {
    banner: propTypes.object
}

SaleBanner.defaultProps = {
    banner: {
        img: "assets/img/blog/banner1.png"
    }
}
