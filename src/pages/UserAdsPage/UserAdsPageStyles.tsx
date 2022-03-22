import styled from "styled-components";

export const UserAdsList = styled.div`
  width: 100%;

  & ul {
    margin-top: 50px;
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 70px;
  }
  & li {
    width: 80%;
    height: 70px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    background-color: #d3e2ff;
  }
`;

export const UserAdsInfo = styled.div`
  display: flex;
  flex-direction: column;
  & h2,
  p {
    margin: 0px;
  }
`;
export const UserAdsPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .UserAds__price {
    font-size: 30px;
  }
`;
