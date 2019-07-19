import React, {Component} from 'react';
import BreadCrumbs        from '../BreadCrumbs/BreadCrumbs';
import InfoBlock          from '../InfoBlock/InfoBlock';

export default class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.loginForm = this.loginForm.bind(this);
    }

    loginForm() {
        console.log(this.refs.username.value);
        console.log(this.refs.password.value);
    }

    render() {
        return (
            <div>
                <BreadCrumbs/>
                <div className="log-reg-v3 content-md">
                    <div className="container">
                        <div className="row">
                            <InfoBlock/>
                        <div className="col-md-5">
                            <form id="sky-form1" className="log-reg-block sky-form">
                            <h2>Log in to your account</h2>
                            <section>
                                <label className="input login-input">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"/></span>
                                        <input type="email"
                                               placeholder="Email Address"
                                               name="email"
                                               className="form-control"
                                               ref="username"
                                        />
                                    </div>
                                </label>
                            </section>
                            <section>
                                <label className="input login-input no-border-top">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock"/></span>
                                        <input type="password"
                                               placeholder="Password"
                                               name="password"
                                               className="form-control"
                                               ref="password"
                                        />
                                    </div>
                                </label>
                            </section>
                            <div className="row margin-bottom-5">
                                <div className="col-xs-6">
                                    <label className="checkbox">
                                        <input type="checkbox" name="checkbox"/>
                                        Remember me
                                    </label>
                                </div>
                                <div className="col-xs-6 text-right">
                                    <p>Forget your Password?</p>
                                </div>
                            </div>
                            <button
                                onClick={this.loginForm}
                                className="btn-u btn-u-sea-shop btn-block margin-bottom-20"
                                type="submit">
                                Log in
                            </button>

                            <div className="border-wings">
                                <span>or</span>
                            </div>

                            <div className="row columns-space-removes">
                                <div className="col-lg-6 margin-bottom-10">
                                    <button type="button" className="btn-u btn-u-md btn-u-fb btn-block">
                                        <i className="fa fa-facebook"/> Facebook Log In
                                    </button>
                                </div>
                                <div className="col-lg-6">
                                    <button type="button" className="btn-u btn-u-md btn-u-tw btn-block">
                                        <i className="fa fa-twitter"/> Twitter Log In
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="margin-bottom-20"/>
                            <p className="text-center">Don't have account yet? Learn more and <a href="shop-ui-register.html">Sign Up</a></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
