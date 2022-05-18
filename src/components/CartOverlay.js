import React, { Component } from "react";
import styled from "styled-components";

import CartOverlayItems from "./CartOverlayItems";
import CartTotals from "./CartTotals";

const Container = styled.div`
  width: 400px;
  margin-left: auto;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

class CartOverlay extends Component {
  render() {
    return (
      <Container>
        <h3>My Bag: 3 items</h3>
        <CartOverlayItems />
        <CartOverlayItems />
        <CartTotals />
      </Container>
    );
  }
}

export default CartOverlay;
