import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleCartOverlay } from "../redux/shopping/shopping-actions";

const Container = styled.div``;
const TotalsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Total = styled.h4`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #1d1f22;
`;
const TotalAmount = styled(Total)``;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ViewBagBtn = styled(Link)`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  width: 48%;
  padding: 13px 36px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  color: #1d1f22;
`;
const CheckoutBtn = styled(ViewBagBtn)`
  background: #5ece7b;
  color: #fff;
  border: none;
`;

class CartTotals extends Component {
  constructor(props) {
    super(props);
    this.handleToggleCart = this.handleToggleCart.bind(this);
  }

  handleToggleCart() {
    this.props.toggleCartOverlay();
  }

  render() {
    return (
      <Container>
        <TotalsWrapper>
          <Total>Total</Total>
          <TotalAmount>$5657</TotalAmount>
        </TotalsWrapper>
        <ButtonsWrapper>
          <ViewBagBtn to="/cart" onClick={this.handleToggleCart}>
            View Bag
          </ViewBagBtn>
          <CheckoutBtn to="#">Checkout</CheckoutBtn>
        </ButtonsWrapper>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartOverlay: () => dispatch(toggleCartOverlay()),
  };
};

export default connect(null, mapDispatchToProps)(CartTotals);
