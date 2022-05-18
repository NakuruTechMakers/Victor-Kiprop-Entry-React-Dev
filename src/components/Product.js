import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

const ContainerWrapper = styled.div`
  margin: auto;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
const ProductWrapper = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 360px;
`;
const ProductImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 300px;
`;
const ProductName = styled.h3`
  margin: 0;
`;
const Price = styled.h5`
  margin: 0;
`;

class Product extends Component {
  render() {
    const { data } = this.props;
    return (
      <ContainerWrapper>
        {data.categories.map((item) => (
          <Container key={item.index}>
            {item.products.map((product) => {
              return (
                <ProductWrapper>
                  <ProductImage src={product.gallery[0]} alt={product.name} />
                  <ProductName>{product.name}</ProductName>
                  <Price>
                    {product.prices[0].currency.symbol}{" "}
                    {product.prices[0].amount}
                  </Price>
                </ProductWrapper>
              );
            })}
          </Container>
        ))}
      </ContainerWrapper>
    );
  }
}

export default Product;
