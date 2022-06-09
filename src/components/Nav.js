import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../Logo.png";
import CartOverlay from "./CartOverlay";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

//BRINGING IN STATE
import { connect } from "react-redux";
import { toggleCartOverlay } from "../redux/shopping/shopping-actions";
import { fetchfilteredProducts } from "../redux/shopping/shopping-actions";

// Styled  styles
const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px 10px;
  position: relative;
`;
const LinkItems = styled.div`
  display: flex;
  align-items: center;
`;
const LinkItem = styled.div`
  margin-right: 15px;
`;
const LogoContainer = styled(Link)``;
const CartWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CurrencySymbol = styled.div`
  margin-right: 15px;
`;
const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  span {
    display: inline-block;
    background: #000;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    color: #fff;
    padding: 3px;
    text-align: center;
    position: absolute;
    top: -10px;
    right: -10px;
  }
`;
const BasketWrapper = styled.div``;
const BasketIcon = styled(BsCart2)`
  font-size: 20px;
  color: #000;
`;

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredData: [],
      cartCount: 0,
      data: { currencies: [] },
      loading: false,
      error: "",
    };

    this.handleToggleCart = this.handleToggleCart.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }
  ////////////////////////////////////////////////////////////Start here - 46th minute on React state management with redux

  handleCount() {
    let count = 0;

    this.props.cart.forEach((item) => {
      count += item.qty;
    });

    this.setState({
      cartCount: count,
    });
  }

  componentDidMount() {
    this.handleCount();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.cart !== prevProps.cart) {
      this.handleCount();
    }
  }

  // Toggle the cart overlay
  handleToggleCart() {
    this.props.toggleCartOverlay();
  }
  // FILTER PRODUCTS BY CATEGORY
  filterResults = (categoryItem) => {
    const filteredProduct = this.props.data.categories
      ?.slice(0, 1)
      .map((item, index) => {
        return item.products?.filter((product) => {
          return product.category === categoryItem;
        });
      });
    console.log(filteredProduct);
    this.props.fetchfilteredProducts(filteredProduct[0]);
  };

  filterAllResults = () => {
    const clothes = this.props.data.categories
      ?.slice(0, 1)
      .map((item, index) => {
        return item.products?.filter((product) => {
          return product.category === "clothes";
        });
      });
    const tech = this.props.data.categories?.slice(0, 1).map((item, index) => {
      return item.products?.filter((product) => {
        return product.category === "tech";
      });
    });
    const children = clothes[0].concat(tech[0]);
    this.props.fetchfilteredProducts(children);
  };

  render() {
    return (
      <Container>
        <LinkItems>
          <LinkItem>
            <Link to="/" onClick={() => this.filterAllResults()}>
              All
            </Link>
          </LinkItem>
          <LinkItem onClick={() => this.filterResults("tech")}>
            <Link to="/">Tech</Link>
          </LinkItem>
          <LinkItem onClick={() => this.filterResults("clothes")}>
            <Link to="/">Clothes</Link>
          </LinkItem>
        </LinkItems>
        <LogoContainer to="/" onClick={() => this.filterAllResults()}>
          <img src={Logo} alt="Ecommerce Logo" />
        </LogoContainer>

        <CartWrapper>
          <CurrencySymbol>currency</CurrencySymbol>
          <CartIcon>
            <BasketWrapper onClick={this.handleToggleCart}>
              <BasketIcon />
              <span>{this.state.cartCount}</span>
            </BasketWrapper>
            {this.props.cartOverlayOpen && <CartOverlay />}
          </CartIcon>
        </CartWrapper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartOverlayOpen: state.shop.cartOverlayOpen,
    cart: state.shop.cart,
    data: state.shop.data,
    filteredProducts: state.shop.filteredProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartOverlay: () => dispatch(toggleCartOverlay()),
    fetchfilteredProducts: (someProducts) =>
      dispatch(fetchfilteredProducts(someProducts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
