import React, { Component } from "react";
import styled from "styled-components";

import CartOverlayItems from "./CartOverlayItems";
import CartTotals from "./CartTotals";

const Container = styled.div`
  width: 400px;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: #fff;
  position: absolute;
  right: 0;
  z-index: 99;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
`;

class CartOverlay extends Component {
  render() {
    return (
      <Container>
        <Title>My Bag: 3 items</Title>
        <CartOverlayItems />
        <CartOverlayItems />
        <CartTotals />
      </Container>
    );
  }
}

export default CartOverlay;
