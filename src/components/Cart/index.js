import React, { Component } from "react";
import CartItem from "../CartItem";
import CartOrderComponent from "../CartOrderComponent";
import {
  CartWrapper,
  Title
} from "./CartStyles";

import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <CartWrapper>
        <Title>cart</Title>
        {cart.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
        <CartOrderComponent />
      </CartWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
