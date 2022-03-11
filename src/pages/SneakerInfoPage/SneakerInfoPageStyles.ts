import styled from "styled-components";

export const SneakerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 360px;
  width: 100vw;
  & img {
    height: 170px;
    object-fit: cover;
  }
`;
export const SneakerCardName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  height: 80px;
  width: 250px;
  & p {
    font-size: 20px;
    margin: 2px;
  }
  & .sneaker_name {
    font-size: 30px;
    font-family: "arial";
    font-weight: 900;
  }
`;
export const SneakerCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;
  width: 325px;
  height: 60px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  & p {
    margin: 0px;
  }
`;
