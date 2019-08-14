import React, {Component}                          from 'react';
import { FacebookLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import { Button, Form, FormGroup, Label, Input }   from 'reactstrap';
import {Link}                                      from "react-router-dom";
import                                                  '../../ui/form/formlogin.css';

export default class FormLogin extends Component {
    render() {
        return (
            <div>
                <Form>
                    <div className="form-child">
                        <div className="col-md-pull-6">
                            <h2>Login </h2>
                            <FormGroup>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email Address"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                            </FormGroup>
                            <h5>Forgot your password?</h5>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"/>{' '}
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button color="primary">Login</Button>{' '}
                            <FacebookLoginButton/>
                            <TwitterLoginButton/>
                            <h5>Don't have account yet? Learn more and <Link to="/register">Sign Up</Link></h5>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}
