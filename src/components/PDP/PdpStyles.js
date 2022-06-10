import styled from "styled-components";

// STYLED COMPONENTS
export const PDPContainer = styled.div`
  padding-top:60px;
  margin: auto;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 5fr;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ProductImage = styled.img`
  width: auto;
  height: 87.61px;
  object-fit: contain;
  margin-bottom: 8px;
  cursor: pointer;
`;
export const MiddleContainer = styled.div``;
export const MainImage = styled.img`
  width: 100%;
`;
export const RightContainer = styled.div`
  padding: 0px 30px 20px 5vw;
  display: flex;
  flex-direction: column;
`;

export const Brand = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
  margin-top: 0px;
`;
export const Name = styled(Brand)`
  font-weight: 400;
`;
export const AttributeName = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
  margin: 18px 0px 10px;
`;
export const AttributeWrap = styled.div`
  width: auto;
  height: 50px;
  display: flex;
`;
export const AttributeValue = styled.div`
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
export const Price = styled.div``;
export const PriceLabel = styled(AttributeName)``;
export const Amount = styled.h5`
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1d1f22;
`;
export const Button = styled.button`
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
export const Desc = styled.span`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
  text-align: justify;
  width: 292px;
`;