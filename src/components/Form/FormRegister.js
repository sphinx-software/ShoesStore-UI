import React, {Component}   from 'react';
import HeadBanner           from '../Banner/HeadBanner';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../../ui/form/formregister.css';


class FormRegister extends Component {
    render () {
        return (
            <div>
                <Form>
                    <Form className="form-child">
                        <h2>Register</h2>
                        <FormGroup>
                            <Input type="text" placeholder="First name" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" placeholder="Last name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Gender</Label>
                            <Input type="select">
                                <option>----</option>
                                <option>Male</option>
                                <option>Femele</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Month</Label>
                            <Input type="select">
                                <option>----</option>
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
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" placeholder="Day" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" placeholder="Year" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="text" placeholder="Username" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Confirm password" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Subcribe to our newsletter to get the lastest offers
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                I have read agreed with the terms & conditions
                            </Label>
                        </FormGroup>
                        <Button color="primary">Create Account</Button>{' '}
                        <h5>Already you have an account?</h5>
                        <h5>Sign In</h5>
                     </Form>
                </Form>
            </div>
        );
    }
}

export default FormRegister;
