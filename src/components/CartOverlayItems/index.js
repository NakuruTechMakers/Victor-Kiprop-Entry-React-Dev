import React, { Component } from "react";
import {
  CartContainer,
  Container,
  LeftContainer,
  Brand,
  Name,
  Sizes,
  Color,
  Price,
  RightContainer,
  CountContainer,
  Increment,
  Count,
  Decrement,
  ImageContainer,
  Image,
} from "./CartOverlayItemsStyles";

class CartOverlay extends Component {
  render() {
    const { itemData } = this.props;
    return (
      <CartContainer>
        <Container>
          <LeftContainer>
            <Brand>{itemData.brand}</Brand>
            <Name>{itemData.name}</Name>
            <Price>
              {itemData.prices[0].currency.symbol}
              {itemData.prices[0].amount}
            </Price>
            <Sizes>Size:</Sizes>
            <Color>Color:</Color>
          </LeftContainer>
          <RightContainer>
            <CountContainer>
              <Increment>+</Increment>
              <Count>{itemData.qty}</Count>
              <Decrement>-</Decrement>
            </CountContainer>
            <ImageContainer>
              <Image src={itemData.gallery[0]} alt={itemData.name} />
            </ImageContainer>
          </RightContainer>
        </Container>
      </CartContainer>
    );
  }
}

export default CartOverlay;
