import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Basket } from "./icons";
import Text from "./text";

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <Col xs={10} className="text-right d-none d-sm-block">
          <Text text="Cart" textType="desc" className="d-inline" />
          <Text text="0 items" color="muted" />
        </Col>
        <Basket className="ml-auto my-auto" />
      </React.Fragment>
    );
  }
}

export default Cart;
