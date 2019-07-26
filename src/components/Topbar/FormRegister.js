import React, {Component} from 'react';
import HeadBanner        from '../Banner/HeadBanner';
import InfoBlock          from '../../components/InfoBlock/InfoBlock';
import {register} from "../../serviceAPI";

class FormRegister extends Component {

    state = {
        userName: '',
        email:'',
        password: '',
        passwordConfirm:'',
        gender:''
    }

    dangKyuser() {
        const {userName, password, email, gender} = this.state;
        const user = {
            userName: userName,
            password: password,
            email: email,
            gender: gender
        };
        register.registUser(user).then((user) => {
            // console.log(user);
            console.log(window);
            window.location.replace("/userlist");
        });
    }


    handleOnchangeInformationUser(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render () {
        return (
            <div>
                <HeadBanner/>
                <div className="log-reg-v3 content-md margin-bottom-30">
                    <div className="container">
                        <div className="row">
                            <InfoBlock/>
                            <div className="col-md-5">
                                <div id="sky-form4" className="log-reg-block sky-form">
                                    <h2>Create New Account</h2>
                                    <div className="login-input reg-input">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <section>
                                                    <label className="input">
                                                        <input type="text" name="firstname" placeholder="First name"
                                                               className="form-control"/>
                                                    </label>
                                                </section>
                                            </div>
                                            <div className="col-sm-6">
                                                <section>
                                                    <label className="input">
                                                        <input type="text" name="lastname" placeholder="Last name"
                                                               className="form-control"/>
                                                    </label>
                                                </section>
                                            </div>
                                        </div>
                                        <label className="select margin-bottom-15">
                                            <select name="gender" className="form-control">
                                                <option value="0" selected disabled>Gender</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Other</option>
                                            </select>
                                        </label>
                                        <div className="row margin-bottom-10">
                                            <div className="col-xs-6">
                                                <label className="select">
                                                    <select name="month" className="form-control">
                                                        <option disabled="" selected="" value="0">Month</option>
                                                        <option>January</option>
                                                        <option>February</option>
                                                        <option>March</option>
                                                        <option>April</option>
                                                        <option>May</option>
                                                        <option>June</option>
                                                        <option>July</option>
                                                        <option>August</option>
                                                        <option>September</option>
                                                        <option>October</option>
                                                        <option>November</option>
                                                        <option>December</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <div className="col-xs-3">
                                                <input type="text" name="day" placeholder="Day" className="form-control"/>
                                            </div>
                                            <div className="col-xs-3">
                                                <input type="text" name="year" placeholder="Year" className="form-control"/>
                                            </div>
                                        </div>
                                        <section>
                                            <label className="input">
                                                <input onChange={this.handleOnchangeInformationUser.bind(this)} type="text" name="userName" placeholder="Username" className="form-control"/>
                                            </label>
                                        </section>
                                        <section>
                                            <label className="input">
                                                <input onChange={this.handleOnchangeInformationUser.bind(this)} type="email" name="email" placeholder="Email address" className="form-control"/>
                                            </label>
                                        </section>
                                        <section>
                                            <label className="input">
                                                <input onChange={this.handleOnchangeInformationUser.bind(this)} type="password" name="password" placeholder="Password" id="password"
                                                       className="form-control"/>
                                            </label>
                                        </section>

                                        <section>
                                            <label className="input">
                                                <input onChange={this.handleOnchangeInformationUser.bind(this)} type="password" name="passwordConfirm" placeholder="Confirm password"
                                                       className="form-control"/>
                                            </label>
                                        </section>

                                    </div>

                                    <label className="checkbox margin-bottom-10">
                                        <input type="checkbox" name="checkbox"/>
                                        Subscribe to our newsletter to get the latest offers
                                    </label>
                                    <label className="checkbox margin-bottom-20">
                                        <input type="checkbox" name="checkbox"/>
                                        I have read agreed with the <p>terms &amp; conditions</p>
                                    </label>
                                    <button className="btn-u btn-u-sea-shop btn-block margin-bottom-20"
                                            onClick={this.dangKyuser.bind(this)}
                                        // onClick={ () => this.dangKyuser()}
                                    >Create Account
                                    </button>
                                </div>
                                <div className="margin-bottom-20"/>
                                <p className="text-center">Already you have an account?</p> <p>Sign In</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormRegister;
