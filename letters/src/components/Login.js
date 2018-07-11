import React, { Component } from "react";
import { withRouter } from "react-router";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  loginHandler = event => {
    event.preventDefault();
    axios
      .post("https://penpaldjango.herokuapp.com/rest-auth/login/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        this.props.setUser({
          username: this.state.username
        });
        localStorage.setItem("authToken", response.data.key);
        console.log(response); //TODO:Put a route here
        this.props.history.push("/penpals");
      })
      .catch(error => {
        console.log("error:", error);
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="logInForm">
        <Label>Log In!</Label>
        <Form onSubmit={this.loginHandler} onChange={this.handleChange}>
          <FormGroup row>
            <Label for="logInUsername" sm={2}>
              Username
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="username"
                id="logInUsername"
                placeholder="Enter your Username here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="logInPassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                name="password"
                id="logInPassword"
                placeholder="Please enter your password here"
              />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
