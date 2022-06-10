import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const CartContainer = styled.div`
  margin: auto;
`;
export const Container = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;
export const LeftContainer = styled.div``;
export const Brand = styled.p`
  font-weight: 600;
  font-size: 30px;
  height: 27px;
  color: #1d1f22;
`;
export const Name = styled.h2`
  font-weight: 400;
  font-size: 30px;
  height: 27px;
  color: #1d1f22;
`;
export const Sizes = styled.div`
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
`;
export const Color = styled(Sizes)``;
export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #1d1f22;
  line-height: 24px;
`;
export const RightContainer = styled.div`
  display: flex;
  height: 288px;
`;
export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Increment = styled.div`
  padding: 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 17px;
  cursor: pointer;
`;
export const Count = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  color: #1d1f22;
`;
export const Decrement = styled(Increment)``;
export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageContent = styled.img`
  width: 200px;
  height: 288px;
  object-fit: contain;
`;
export const LeftArrow = styled(AiOutlineLeft)`
  width: 24px;
  height: 24px;
  color: #fff;
  background: rgba(0, 0, 0, 0.73);
  position: absolute;
  bottom: 20px;
  right: 45px;
  cursor: pointer;
`;
export const RightArrow = styled(AiOutlineRight)`
  width: 24px;
  height: 24px;
  color: #fff;
  background: rgba(0, 0, 0, 0.73);
  position: absolute;
  bottom: 20px;
  right: 15px;
  cursor: pointer;
`;
