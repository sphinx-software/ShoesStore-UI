import React, { Component } from 'react';

export default class RatingDropDown extends Component {
    render() {

        const { title } = this.props;

        return(
            <div className="panel-group margin-bottom-30" id="accordion-v6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion-v6" href="#collapseSix">
                                { title }
                                <i className="fa fa-angle-down" />
                            </a>
                        </h2>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <div className="stars-ratings stars-ratings-label">
                                <input type="radio" name="stars-rating" id="stars-rating-5" />
                                <label htmlFor="stars-rating-5"><i className="fa fa-star" /></label>
                                <input type="radio" name="stars-rating" id="stars-rating-4" />
                                <label htmlFor="stars-rating-4"><i className="fa fa-star" /></label>
                                <input type="radio" name="stars-rating" id="stars-rating-3" />
                                <label htmlFor="stars-rating-3"><i className="fa fa-star" /></label>
                                <input type="radio" name="stars-rating" id="stars-rating-2" />
                                <label htmlFor="stars-rating-2"><i className="fa fa-star" /></label>
                                <input type="radio" name="stars-rating" id="stars-rating-1" />
                                <label htmlFor="stars-rating-1"><i className="fa fa-star" /></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
