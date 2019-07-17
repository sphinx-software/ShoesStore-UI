import React, {Component} from 'react';
export default class InfoBlock extends Component {
    render() {
        return(
            <div className="col-md-7 md-margin-bottom-50">
                <h2 className="welcome-title">Welcome to Unify</h2>
                <p>Suspendisse et tincidunt ipsum, et dignissim urna. Vestibulum nisl tortor, gravida at magna et, suscipit vehicula massa.</p><br />
                <div className="row margin-bottom-50">
                    <div className="col-sm-4 md-margin-bottom-20">
                        <div className="site-statistics">
                            <span>20,039</span>
                            <small>Products</small>
                        </div>
                    </div>
                    <div className="col-sm-4 md-margin-bottom-20">
                        <div className="site-statistics">
                            <span>54,283</span>
                            <small>Reviews</small>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="site-statistics">
                            <span>376k</span>
                            <small>Sale</small>
                        </div>
                    </div>
                </div>
                <div className="members-number">
                    <h3>Join more than <span className="shop-green">13,000</span> members worldwide</h3>
                    <img className="img-responsive" src="assets/img/map.png" alt />
                </div>
            </div>
        )
    }
}