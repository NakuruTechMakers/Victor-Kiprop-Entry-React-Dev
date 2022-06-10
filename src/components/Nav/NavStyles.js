import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 20px 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
export const LinkItems = styled.div`
  display: flex;
  align-items: center;
`;
export const LinkItem = styled.div`
  margin-right: 15px;
`;
export const LogoContainer = styled(Link)``;
export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CurrencySymbol = styled.div`
  margin-right: 15px;
`;
export const CartIcon = styled.div`
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
export const BasketWrapper = styled.div``;
export const BasketIcon = styled(BsCart2)`
  font-size: 20px;
  color: #000;
`;
