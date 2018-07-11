import React, { Component } from "react";
import Penpal from "./PenPal";
import axios from "axios";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

class PenPalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      penpals: []
    };
  }
  getPenpals() {
    let config = {
      headers: { Authorization: `Token ${localStorage.getItem("authToken")}` }
    };
    console.log(config);
    axios
      .get(`https://penpaldjango.herokuapp.com/api/penpals`, config)
      .then(response => {
        console.log("Penpals: ", response);
        this.setState({ penpals: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.user) {
      this.getPenpals();
    }
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.penpals.map(penpal => (
            // <Link className="penpal-cards" to={`penpals/${penpal.name}`}>
            <Penpal penpal={penpal} />
            // </Link>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PenPalList;
