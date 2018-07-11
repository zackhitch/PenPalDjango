import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

class PenPal extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.penpal.name}</CardTitle>
            <CardText>{this.props.penpal.address}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default PenPal;
