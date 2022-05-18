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
const PDPContainer = styled.div`
  max-width: 1300px;
  margin: auto;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 5fr;
`;
const LeftContainer = styled.div`
  background: red;
`;
const ProductImage = styled.img`
  width: 120px;
  height: 120px;
`;
const MiddleContainer = styled.div`
  background: yellow;
`;
const MainImage = styled.img`
  width: 100%;
`;
const RightContainer = styled.div`
  padding: 30px 25px;
  background: red;
  display: flex;
  flex-direction: column;
`;

const Brand = styled.h2``;
const Name = styled.h2``;
const Sizes = styled.div``;
const Color = styled.div``;
const Price = styled.div``;
const Button = styled.button`
  padding: 20px;
  color: #fff;
  background: green;
  text-transform: uppercase;
  width: 100%;
  border: none;
  outline: none;
  font-size: 22px;
  font-weight: 600;
`;
const Desc = styled.p`
  text-align: justify;
`;

class PDP extends Component {
  render() {
    return (
      <PDPContainer>
        <h2>PDP Page</h2>
        <Query query={GET_SINGLE_PRODUCT}>
          {({ loading, error, data }) => {
            if (loading) return <h1>Loading</h1>;
            if (error) return <h2>Error</h2>;

            // console.log(data);

            return (
              <Container>
                <LeftContainer>
                  <h2>LEFT</h2>
                  {data.product.gallery.map((image) => {
                    return <ProductImage src={image} alt="product image" />;
                  })}
                </LeftContainer>
                <MiddleContainer>
                  <h2>MIDDLE</h2>
                  <MainImage src={data.product.gallery[0]} alt="main image" />
                </MiddleContainer>
                <RightContainer>
                  <h2>RIGHT</h2>
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
                  <Button>ADD TO CART</Button>
                  <Desc>{data.product.description}</Desc>
                </RightContainer>
              </Container>
            );
          }}
        </Query>
      </PDPContainer>
    );
  }
}

export default PDP;
