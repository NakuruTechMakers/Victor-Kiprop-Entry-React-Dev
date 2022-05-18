import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;
const TotalsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ViewBagBtn = styled.button`
  width: 48%;
  padding: 15px;
  text-transform: uppercase;
  background: transparent;
`;
const CheckoutBtn = styled(ViewBagBtn)`
  background: green;
  color: #fff;
`;

class CartTotals extends Component {
  render() {
    return (
      <Container>
        <TotalsWrapper>
          <h5>Total</h5>
          <h5>$5657</h5>
        </TotalsWrapper>
        <ButtonsWrapper>
          <ViewBagBtn>View Bag</ViewBagBtn>
          <CheckoutBtn>Checkout</CheckoutBtn>
        </ButtonsWrapper>
      </Container>
    );
  }
}

export default CartTotals;
