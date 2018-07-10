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
      .post("https://penpaldjango.herokuapp.com/api-token-auth/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        this.props.setUser({
          username: this.state.username,
          userId: response.data.id
        });
        localStorage.setItem("authToken", response.data.token);
        console.log("SUCCESS!"); //TODO:Put a route here
      })
      .catch(error => {
        console.log("error:", error);
      });
  };
  render() {
    return (
      <div className="logInForm">
        <Label>Log In!</Label>
        <Form onSubmit={this.loginHandler}>
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

export default Login;
