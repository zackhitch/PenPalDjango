import React, { Component, Fragment } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import PenPalList from "./components/PenPalList";
import { Container } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: undefined
    };
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.setState({ user: this.setState.user });
  }
  setUser(user) {
    this.setState({ user: user });
  }
  render() {
    return (
      <Fragment>
        <div className="App">
          <NavBar user={this.state.user} />
          <Container>
            <Route exact path="/" render={() => <SignUp />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/penpals" render={() => <PenPalList />} />
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default App;
