import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  ContainerWrapper,
  Container,
  ProductWrapper,
  ProductImage,
  ProductName,
  Price,
  CartIcon,
} from "./ProductStyles";

//BRINGING IN STATE
import { connect } from "react-redux";
import { loadCurrentItem } from "../../redux/shopping/shopping-actions";

class Product extends Component {
  render() {
    const { loadCurrentItem, filteredProducts } = this.props;

    return (
      <ContainerWrapper>
        <Container>
          {filteredProducts?.map((product) => {
            return (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                onClick={() => loadCurrentItem(product)}
                style={{ textDecoration: "none" }}
              >
                <ProductWrapper>
                  <ProductImage src={product.gallery[0]} alt={product.name} />
                  <ProductName>{product.name}</ProductName>
                  <Price>
                    {product.prices[0].currency.symbol}{" "}
                    {product.prices[0].amount}
                  </Price>
                  <CartIcon />
                </ProductWrapper>
              </Link>
            );
          })}
        </Container>
      </ContainerWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.shop.data,
    filteredProducts: state.shop.filteredProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
