import React, { Component } from "react";
import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import "../App.css";
import { Link } from "react-router-dom";

//BRINGING IN STATE
import { connect } from "react-redux";
import { loadCurrentItem } from "../redux/shopping/shopping-actions";

// STYLED COMPONENTS STYLING
const ContainerWrapper = styled.div`
  margin: auto;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
const CartIcon = styled(BsCart2)`
  background: #56ad70;
  color: #fff;
  height: 52px;
  width: 52px;
  padding: 5px;
  object-fit: contain;
  display: block;
  border-radius: 50%;
  position: absolute;
  bottom: 26px;
  right: 15px;
  display: none;
  transition: all 0.8s ease-in;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 386px;
  padding: 16px;
  height: 444px;
  background: #fff;
  // position:absolute;
  z-index: -1;
  position: relative;
  transition: all 0.8s ease;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover ${CartIcon} {
    display: block;
  }
`;
const ProductImage = styled.img`
  object-fit: contain;
  width: 354px;
  height: 330px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const ProductName = styled.h3`
  line-height: 29px;
  letter-spacing: 0px;
  font-weight: 300;
  font-size: 18px;
  color: #8d8f9a;
  color: #1d1f22;
  text-decoration: none;
`;
const Price = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
`;

class Product extends Component {
  render() {
    const { data, loadCurrentItem, filteredProducts } = this.props;

    return (
      <ContainerWrapper>
        <h2>product</h2>
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

        {/* {filteredProducts?.map((item, index) => (
          <Container key={index}>
            {item?.map((product) => {
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
        ))} */}
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
