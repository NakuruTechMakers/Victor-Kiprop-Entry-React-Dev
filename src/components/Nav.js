import React, { Component } from "react";
import styled from "styled-components";

// Query
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_CURRENCY = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f4f4f4;
`;
const LinkItems = styled.div`
  display: flex;
  align-items: center;
`;
const LinkItem = styled.div`
  margin-right: 15px;
`;
const Logo = styled.div``;
const CartWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CurrencySymbol = styled.div`
  margin-right: 15px;
`;
const CartIcon = styled.div``;

class Nav extends Component {
  render() {
    return (
      <Container>
        <LinkItems>
          <LinkItem>All</LinkItem>
          <LinkItem>Tech</LinkItem>
          <LinkItem>Clothes</LinkItem>
        </LinkItems>

        <Logo>Logo</Logo>

        <CartWrapper>
          <CurrencySymbol>
            <Query query={GET_CURRENCY}>
              {({ loading, error, data }) => {
                if (loading) return <div>loading...</div>;
                if (error) return <div>error</div>;

                // console.log(data);

                return (
                  <select name="cars" id="cars">
                    {data.currencies.map((currency) => {
                      return (
                        <option value={currency.symbol}>
                          {currency.symbol} {currency.label}
                        </option>
                      );
                    })}
                  </select>
                );
              }}
            </Query>
          </CurrencySymbol>
          <CartIcon>cart Icon</CartIcon>
        </CartWrapper>
      </Container>
    );
  }
}

export default Nav;
