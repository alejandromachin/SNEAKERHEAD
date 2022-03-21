import styled from "styled-components";

export const SneakerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 340px;
  width: 100vw;
  & img {
    height: 170px;
    object-fit: cover;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    height: 300px;
  }
`;

export const SneakerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  width: 325px;
  height: 60px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  & .SneakerInfoPage__loginToSell {
    display: flex;
    align-items: center;
    width: 100px;
    height: 40px;
    text-align: center;
    font-size: 15px;
    color: #ff0000;
    border: none;
    background-color: #d3e2ff;
  }
  & p {
    margin: 0px;
  }
`;
export const SneakerCardInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: #d3e2ff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  & button {
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    color: #ff0000;
    border: none;
    background-color: #d3e2ff;
  }
`;

export const SizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #d3e2ff;
  font-size: 20px;
  margin-bottom: 15px;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
    width: 100%;
  }
`;
