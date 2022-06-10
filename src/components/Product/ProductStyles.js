import styled from "styled-components";
import { BsCart2 } from "react-icons/bs";

export const ContainerWrapper = styled.div`
  margin: auto;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
export const CartIcon = styled(BsCart2)`
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
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  width: 386px;
  padding: 16px;
  height: 444px;
  position: relative;
  transition: all 0.8s ease;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover ${CartIcon} {
    display: block;
  }
`;
export const ProductImage = styled.img`
  object-fit:contain ;
  width: 354px;
  height: 330px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
export const ProductName = styled.h3`
  line-height: 29px;
  letter-spacing: 0px;
  font-weight: 300;
  font-size: 18px;
  color: #8d8f9a;
  color: #1d1f22;
  text-decoration: none;
`;
export const Price = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: #1d1f22;
`;
