import React, { Component } from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";
import Nav from "./components/Nav";
import PDP from "./components/PDP";
import Cart from "./components/Cart";
import styled from "styled-components";

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Query
import gql from "graphql-tag";
import { apolloClient } from "./index";

//BRINGING IN STATE
import { connect } from "react-redux";
import { fetchProducts } from "./redux/shopping/shopping-actions";

// OUR QUERY
const GET_PRODUCTS = gql`
  query {
    categories {
      products {
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
  }
`;

// sort this later
const Wrap = styled.div``;
const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`;

class App extends Component {
  componentDidMount = async () => {
    const { fetchProducts } = this.props;

    let res;
    try {
      res = await apolloClient.query({
        query: GET_PRODUCTS,
      });
    } catch (error) {
      console.log(error);
    }

    fetchProducts(res.data);
  };

  render() {
    const { currentItem, cartOverlayOpen } = this.props;
    return (
      <Router>
        <div className="App">
          <>
            <Nav />
            <Wrap
              style={
                cartOverlayOpen
                  ? {
                      width: "100%",
                      height: "100%",
                      background: "rgba(0, 0, 0, 0.2)",
                      zIndex: 50,
                    }
                  : { background: "transparent" }
              }
            >
              <Container>
                <Routes>
                  <Route exact path="/" element={<ProductsList />} />
                  <Route exact path="/cart" element={<Cart />} />
                  {/* <Route exact path="/cart-overlay" element={<CartOverlay />} /> */}
                  {/* {!currentItem ? (
                <Redirect to="/" />
              ) : (
                <Route exact path="/product/:id" element={<PDP />} />
              )} */}

                  {!currentItem ? (
                    <Route exact path="/" element={<Navigate to="/" />} />
                  ) : (
                    <Route path="/product/:id" element={<PDP />} />
                  )}
                </Routes>
              </Container>
            </Wrap>
          </>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
    cartOverlayOpen: state.shop.cartOverlayOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (data) => dispatch(fetchProducts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
