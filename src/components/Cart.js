import React, { Component } from "react";
import styled from "styled-components";

// Query
import gql from "graphql-tag";
import { Query } from "react-apollo";

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

const CartContainer = styled.div`
  max-width: 1300px;
  margin: auto;
`;
const Container = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;
const LeftContainer = styled.div`
  background: orange;
`;
const Brand = styled.h2``;
const Name = styled.h2``;
const Sizes = styled.div``;
const Color = styled.div``;
const Price = styled.div``;

const RightContainer = styled.div`
  display: flex;
`;
const CountContainer = styled.div`
  background: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Increment = styled.div`
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 17px;
`;
const Count = styled.div``;
const Decrement = styled.div`
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 17px;
`;

const ImageContainer = styled.div``;

const ImageContent = styled.img`
  width: 250px;
  border: 1px solid black;
`;

class Cart extends Component {
  render() {
    return (
      <CartContainer>
        <Query query={GET_SINGLE_PRODUCT}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading</h1>;
            if (error) return <h2>Error</h2>;

            // console.log(data);

            return (
              <Container>
                <LeftContainer>
                  <Brand>{data.product.brand}</Brand>
                  <Name>{data.product.name}</Name>
                  <Sizes>SIZE:</Sizes>
                  <Color>COLOR:</Color>
                  <Price>
                    <h5>PRICE:</h5>
                    <h5>
                      {data.product.prices[0].currency.symbol}
                      {data.product.prices[0].amount}
                    </h5>
                  </Price>
                </LeftContainer>
                <RightContainer>
                  <CountContainer>
                    <Increment>+</Increment>
                    <Count>0</Count>
                    <Decrement>-</Decrement>
                  </CountContainer>
                  <ImageContainer>
                    <ImageContent src={data.product.gallery[0]} alt="cart" />
                  </ImageContainer>
                </RightContainer>
              </Container>
            );
          }}
        </Query>
      </CartContainer>
    );
  }
}

export default Cart;
