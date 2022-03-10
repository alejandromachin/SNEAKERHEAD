import styled from "styled-components";

export const SneakerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 300px;
  & img {
    height: 200px;
    object-fit: cover;
  }
`;
export const SneakerCardText = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 200px;
  & p {
    margin: 2px;
  }
  & .sneaker_name {
    font-size: 25px;
    font-family: "arial";
    font-weight: 900;
  }
`;
