import React, { Component } from "react";
import axios from "axios";

import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="signUpForm">
        <Label>Sign Up!</Label>
        <Form>
          <FormGroup row>
            <Label for="signUpUsername" sm={2}>
              Username
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="username"
                id="signUpUsername"
                placeholder="Enter your desired Username here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="signUpPassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="signUpPassword"
                placeholder="Please enter a password here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="signUpPasswordConfirm" sm={2}>
              Re-Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="signUpPasswordConfirm"
                placeholder="Please confirm your password here"
              />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
