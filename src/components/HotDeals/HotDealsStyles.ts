import styled from "styled-components";

export const HotDealsTitle = styled.div`
  width: 90vw;
  @media (min-width: 600px) {
    width: 80vw;
  }
  & h2 {
    text-align: left;
    margin-bottom: 10px;
    font-weight: bold;
    text-shadow: 1px 0 #000, 1px 0 #000, 1px 0 #000, 1px 0 #000;
  }
`;

export const HotDealsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90vw;
  gap: 10px;

  & .desktop {
    display: none;
    @media (min-width: 600px) {
      display: flex;
    }
  }
  @media (min-width: 600px) {
    width: 80vw;
    gap: 20px;
  }
`;

export const HotDealsCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 48%;
  height: 120px;
  background-color: #d3e2ff;

  cursor: pointer;

  & img {
    margin: 10px;
    height: 90px;
    border: 1px solid #fff;
  }
  @media (min-width: 600px) {
    width: 260px;
    height: 100px;
    align-items: center;
    justify-content: center;
    border: 2px solid #878585;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);

    &:hover {
      border: 2px solid red;
    }
    & img {
      margin: 5px;
      height: 60px;
      width: 40px;
      border: 1px solid #fff;
    }
  }
`;
export const HotDealsCardText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  & h3 {
    font-size: 17px;
    margin: 0px;
  }
  & .HotDeals__colorway {
    margin: 0px;
    font-size: 14px;
  }
  & .HotDeals__price {
    font-size: 18px;
    margin: 5px;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    & h3 {
      margin-top: 20px;
    }
    & .HotDeals__colorway {
      margin: 0px;
      font-size: 10px;
    }
    & .HotDeals__price {
      margin-top: 5px;
      font-size: 23px;
      font-weight: bold;
    }
  }
`;
