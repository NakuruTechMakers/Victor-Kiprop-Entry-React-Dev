import React, { Component } from "react";
import Product from "../Product";

import { Container, Title } from "./ProductListStyles";

import { connect } from "react-redux";

class ProductsList extends Component {
  render() {
    const { filteredProducts } = this.props;
    return (
      <Container>
        {filteredProducts.map((item) => item.category)}
        <Title>Category name</Title>
        <Product />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filteredProducts: state.shop.filteredProducts,
  };
};

export default connect(mapStateToProps)(ProductsList);
