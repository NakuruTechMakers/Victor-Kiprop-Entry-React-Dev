import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 25px 0px;
  margin: 10px 0px;
`;
const Tax = styled.div``;
const Title = styled.h2`
  display: inline-block;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #1d1f22;
  margin: 0px;
`;
const TotalTax = styled.p`
  display: inline-block;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #1d1f22;
  margin: 10px;
`;
const Quantity = styled(Title)``;
const Value = styled(TotalTax)``;
const Total = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #1d1f22;
`;
const Amount = styled(TotalTax)``;
const OrderBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  align-items: center;
  padding: 16px 32px;
  width: 279px;
  height: 43px;
  background: #5ece7b;
  color: #fff;
  margin: 15px 0px;
`;

class CartOrderComponent extends Component {
  render() {
    return (
      <Container>
        <Tax>
          <Title>Tax 21%:</Title> <TotalTax>$40</TotalTax>
        </Tax>
        <Quantity>
          <Title>Quantity:</Title> <Value>3</Value>
        </Quantity>
        <Total>
          <Title>Total:</Title> <Amount>$200</Amount>
        </Total>
        <OrderBtn>ORDER</OrderBtn>
      </Container>
    );
  }
}

export default CartOrderComponent;
