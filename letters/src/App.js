import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
