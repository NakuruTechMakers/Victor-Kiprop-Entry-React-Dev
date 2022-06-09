import React, { Component } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Query
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CartOrderComponent from "./CartOrderComponent";

const GET_SINGLE_PRODUCT = gql`
  query {
    product(id: "huarache-x-stussy-le") {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`;

const CartWrapper = styled.div`
  padding-top: 30px;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: #1d1f22;
  margin: 30px 0px;
`;
const CartContainer = styled.div`
  margin: auto;
`;
const Container = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;
const LeftContainer = styled.div``;
const Brand = styled.p`
  font-weight: 600;
  font-size: 30px;
  height: 27px;
  color: #1d1f22;
`;
const Name = styled.h2`
  font-weight: 400;
  font-size: 30px;
  height: 27px;
  color: #1d1f22;
`;
const Sizes = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
`;
const Color = styled(Sizes)``;
const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #1d1f22;
  line-height: 24px;
`;

const RightContainer = styled.div`
  display: flex;
`;
const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Increment = styled.div`
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 17px;
  cursor: pointer;
`;
const Count = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;

  color: #1d1f22;
`;
const Decrement = styled(Increment)``;

const ImageContainer = styled.div`
  position: relative;
`;

const ImageContent = styled.img`
  width: 200px;
  height: 288px;
  object-fit: contain;
  border: 1px solid black;
`;
const LeftArrow = styled(AiOutlineLeft)`
  width: 24px;
  height: 24px;
  color: #fff;
  background: rgba(0, 0, 0, 0.73);
  position: absolute;
  bottom: 20px;
  right: 45px;
  cursor: pointer;
`;
const RightArrow = styled(AiOutlineRight)`
  width: 24px;
  height: 24px;
  color: #fff;
  background: rgba(0, 0, 0, 0.73);
  position: absolute;
  bottom: 20px;
  right: 15px;
  cursor: pointer;
`;

class Cart extends Component {
  render() {
    return (
      <CartWrapper>
        <Title>cart</Title>
        <CartContainer>
          <Query query={GET_SINGLE_PRODUCT}>
            {({ loading, error, data }) => {
              if (loading) return <h1>Loading</h1>;
              if (error) return <h2>Error</h2>;

              return (
                <Container>
                  <LeftContainer>
                    <Brand>{data.product.brand}</Brand>
                    <Name>{data.product.name}</Name>
                    <Price>
                      {data.product.prices[0].currency.symbol}
                      {data.product.prices[0].amount}
                    </Price>
                    <Sizes>SIZE:</Sizes>
                    <Color>COLOR:</Color>
                  </LeftContainer>
                  <RightContainer>
                    <CountContainer>
                      <Increment>+</Increment>
                      <Count>1</Count>
                      <Decrement>-</Decrement>
                    </CountContainer>
                    <ImageContainer>
                      <ImageContent src={data.product.gallery[0]} alt="cart" />
                      <LeftArrow />
                      <RightArrow />
                    </ImageContainer>
                  </RightContainer>
                </Container>
              );
            }}
          </Query>
        </CartContainer>

        <CartContainer>
          <Query query={GET_SINGLE_PRODUCT}>
            {({ loading, error, data }) => {
              if (loading) return <h1>Loading</h1>;
              if (error) return <h2>Error</h2>;

              return (
                <Container>
                  <LeftContainer>
                    <Brand>{data.product.brand}</Brand>
                    <Name>{data.product.name}</Name>
                    <Price>
                      {data.product.prices[0].currency.symbol}
                      {data.product.prices[0].amount}
                    </Price>
                    <Sizes>SIZE:</Sizes>
                    <Color>COLOR:</Color>
                  </LeftContainer>
                  <RightContainer>
                    <CountContainer>
                      <Increment>+</Increment>
                      <Count>2</Count>
                      <Decrement>-</Decrement>
                    </CountContainer>
                    <ImageContainer>
                      <ImageContent src={data.product.gallery[0]} alt="cart" />
                      <LeftArrow />
                      <RightArrow />
                    </ImageContainer>
                  </RightContainer>
                </Container>
              );
            }}
          </Query>
        </CartContainer>

        <CartOrderComponent />
      </CartWrapper>
    );
  }
}

export default Cart;
