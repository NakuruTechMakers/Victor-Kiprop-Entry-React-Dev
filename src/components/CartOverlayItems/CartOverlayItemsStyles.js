import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
`;
export const Container = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const LeftContainer = styled.div`
`;
export const Brand = styled.p`
  margin: 7px 0px;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
`;
export const Name = styled(Brand)``;
export const Sizes = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #1d1f22;
`;
export const Color = styled(Sizes)``;
export const Price = styled.div`
  margin: 5px 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #1d1f22;
`;

export const RightContainer = styled.div`
  display: flex;
`;
export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Increment = styled.div`
  padding: 5px 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
export const Count = styled.div``;
export const Decrement = styled.div`
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width:150px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
