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
  max-width: 400px;
  margin-left: auto;
`;
const Container = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const LeftContainer = styled.div`
  background: #f4f4f4;
`;
const Brand = styled.p`
  margin: 7px 0px;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
`;
const Name = styled(Brand)``;
const Sizes = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #1d1f22;
`;
const Color = styled(Sizes)``;
const Price = styled.div`
  margin: 5px 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
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
  padding: 5px 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
const Count = styled.div``;
const Decrement = styled.div`
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.div`
  display: flex;
  alogn-items: center;
  height: 200px;
`;

const Image = styled.img`
  object-fit: contain;
  border: 1px solid black;
`;

class CartOverlay extends Component {
  render() {
    return (
      <CartContainer>
        <Query query={GET_SINGLE_PRODUCT}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading</h1>;
            if (error) return <h2>Error</h2>;

            console.log(data);
            return (
              <Container>
                <LeftContainer>
                  <Brand>{data.product.brand}</Brand>
                  <Name>{data.product.name}</Name>
                  <Price>
                    {data.product.prices[0].currency.symbol}
                    {data.product.prices[0].amount}
                  </Price>
                  <Sizes>Size:</Sizes>
                  <Color>Color:</Color>
                </LeftContainer>
                <RightContainer>
                  <CountContainer>
                    <Increment>+</Increment>
                    <Count>0</Count>
                    <Decrement>-</Decrement>
                  </CountContainer>
                  <ImageContainer>
                    <Image src={data.product.gallery[0]} alt="cart" />
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

export default CartOverlay;
