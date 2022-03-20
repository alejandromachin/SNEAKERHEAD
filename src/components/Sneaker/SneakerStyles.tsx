import styled from "styled-components";

export const SneakerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  & img {
    height: 100px;
    object-fit: cover;
  }
  @media (min-width: 600px) {
    height: 170px;
    width: 170px;
  }
`;
export const SneakerCardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: 150px;
  & p {
    font-size: 12px;
    margin: 2px;
  }
  & .sneaker_name {
    font-size: 18px;
    font-family: "arial";
    font-weight: 900;
  }
  @media (min-width: 600px) {
    height: 170px;
    width: 190px;
    & .sneaker_name {
      font-size: 20px;
    }
    & p {
      font-size: 16px;
    }
  }
`;
