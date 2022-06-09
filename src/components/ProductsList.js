import React, { Component } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding-top: 30px 20px;
  margin: auto;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 42px;
  line-height: 67px;
  color: #1d1f22;
  margin-top: 0;
`;

class ProductsList extends Component {
  render() {
    return (
      <Container>
        <Title>Category name</Title>
        <Product />
      </Container>
    );
  }
}


export default ProductsList;
