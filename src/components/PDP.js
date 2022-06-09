import React, { Component } from "react";
import styled from "styled-components";
import { Interweave } from "interweave";

// Query
// import gql from "graphql-tag";
// import { Query } from "react-apollo";
// import { apolloClient } from "../index";

//BRINGING IN STATE
import { connect } from "react-redux";
import { addToCart } from "../redux/shopping/shopping-actions";

// STYLED COMPONENTS
const PDPContainer = styled.div`
  padding-top: 30px;
  margin: auto;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 5fr;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ProductImage = styled.img`
  width: auto;
  height: 87.61px;
  object-fit: contain;
  margin-bottom: 8px;
  cursor: pointer;
`;
const MiddleContainer = styled.div``;
const MainImage = styled.img`
  width: 100%;
`;
const RightContainer = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
`;

const Brand = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
  margin-top: 0px;
`;
const Name = styled(Brand)`
  font-weight: 400;
`;
const AttributeName = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
  margin: 18px 0px 10px;
`;
const AttributeWrap = styled.div`
  width: auto;
  height: 50px;
  display: flex;
`;
const AttributeValue = styled.div`
  margin-right: 12px;
  padding: 20px;
  border: 1px solid #1d1f22;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bg};

  &:active {
    transform: translateY(1.3px);
  }
`;
const Price = styled.div``;
const PriceLabel = styled(AttributeName)``;
const Amount = styled.h5`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1d1f22;
`;
const Button = styled.button`
  text-transform: uppercase;
  border: none;
  outline: none;
  font-size: 22px;
  padding: 16px 32px;
  width: 292px;
  height: 52px;
  background: #5ece7b;
  color: #fff;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }
`;
const Desc = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
  text-align: justify;
  width: 292px;
`;

class PDP extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: 0,
    };

    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick(event) {
    this.setState({
      active: +event.target.dataset.index,
    });
  }

  render() {

    const { active } = this.state;
    const { currentItem,addToCart } = this.props;

    return (
      <PDPContainer>
        <h2>PDP Page</h2>
        {/* {this.state.error && <p>Error:{this.state.error}</p>}

        {this.state.loading ? (
          <p>Loading</p>
        ) : ( */}
        <Container>
          <LeftContainer>
            {currentItem.gallery?.map((image, index) => {
              return (
                <ProductImage
                  src={image}
                  alt="product image"
                  key={image}
                  data-index={index}
                  onClick={this.handleIndexClick}
                  className={index === active ? "active" : ""}
                />
              );
            })}
          </LeftContainer>
          <MiddleContainer>
            <MainImage src={currentItem.gallery[active]} alt="main image" />
          </MiddleContainer>
          <RightContainer>
            <Brand>{currentItem.brand}</Brand>
            <Name>{currentItem.name}</Name>
            {currentItem.attributes?.map((item, index) =>
              item ? (
                <React.Fragment key={item.id}>
                  <AttributeName>{item.name}</AttributeName>
                  <AttributeWrap key={index}>
                    {item.items?.map((item) => {
                      return (
                        <AttributeValue bg={item.value} key={item.id}>
                          {item.value.charAt(0) === "#" ? " " : item.value}
                        </AttributeValue>
                      );
                    })}
                  </AttributeWrap>
                </React.Fragment>
              ) : null
            )}

            <Price>
              <PriceLabel>PRICE:</PriceLabel>
              <Amount>
                {currentItem.prices[0].currency.symbol}
                {currentItem.prices[0].amount}
              </Amount>
            </Price>
            <Button onClick={() =>addToCart(currentItem.id)}>ADD TO CART</Button>
            <Desc>
              <Interweave content={currentItem.description} />
            </Desc>
          </RightContainer>
        </Container>
      </PDPContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart : (id) =>dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PDP);
