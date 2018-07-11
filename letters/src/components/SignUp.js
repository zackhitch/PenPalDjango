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
      password1: "",
      password2: ""
    };
  }

  signupHandler = event => {
    event.preventDefault();
    axios
      .post("http://penpaldjango.herokuapp.com/rest-auth/registration/", {
        username: this.state.username,
        password1: this.state.password1,
        password2: this.state.password2
      })
      .then(response => {
        console.log("New account created! Login to continue.");
        this.props.history.push("/login");
      })
      .catch(error => {
        alert("There was an error creating a new account");
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="signUpForm">
        <Label>Sign Up!</Label>
        <Form onSubmit={this.signupHandler} onChange={this.handleChange}>
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
                name="password1"
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
                name="password2"
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
