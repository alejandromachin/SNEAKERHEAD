import styled from "styled-components";

export const HotDealsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90vw;
  gap: 10px;
`;

export const HotDealsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 48%;
  height: 120px;
  background-color: #d3e2ff;
  border: 1px solid red;

  & img {
    margin: 10px;
    height: 100px;
    border: 1px solid #fff;
  }
`;
export const HotDealsCardText = styled.div`
  display: flex;
  flex-direction: column;
  & h3 {
    margin: 0px;
  }
  & .HotDeals__colorway {
    margin: 0px;
    font-size: 10px;
  }
  & .HotDeals__price {
    font-size: 20px;
  }
`;
