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
`;
export const SneakerCardText = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 145px;
  & p {
    font-size: 12px;
    margin: 2px;
  }
  & .sneaker_name {
    font-size: 18px;
    font-family: "arial";
    font-weight: 900;
  }
`;
