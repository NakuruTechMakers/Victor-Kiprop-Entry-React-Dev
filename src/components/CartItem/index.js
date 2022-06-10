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
  ImageContent,
  LeftArrow,
  RightArrow,
} from "./CartItemStyles";

class index extends Component {
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
            <Sizes>SIZE:</Sizes>
            <Color>COLOR:</Color>
          </LeftContainer>
          <RightContainer>
            <CountContainer>
              <Increment>+</Increment>
              <Count>{itemData.qty}</Count>
              <Decrement>-</Decrement>
            </CountContainer>
            <ImageContainer>
              <ImageContent src={itemData.gallery[0]} alt={itemData.name} />
              <LeftArrow />
              <RightArrow />
            </ImageContainer>
          </RightContainer>
        </Container>
      </CartContainer>
    );
  }
}

export default index;
