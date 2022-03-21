import styled from "styled-components";

export const AdMoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  width: 90vw;
  & img {
    width: 250px;
    margin-top: 20px;
    padding: 10px;
  }
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    align-items: center;
    height: 70vh;
    margin-top: 100px;
  }
`;
export const AdMoreInfoCarousel = styled.div`
  @media (min-width: 600px) {
    width: 45%;
  }
`;

export const AdMoreInfoText = styled.div`
  width: 330px;
  margin-top: 0px;
  padding: 10px;

  & h1 {
    font-size: 40px;

    margin: 0px;
  }
  & h2 {
    font-size: 25px;
    margin-top: 0px;
    margin-bottom: 15px;
  }
  & h3 {
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 5px;
  }
  & p {
    font-size: 25px;

    margin-top: 3px;
    margin-bottom: 3px;
  }
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const DeleteButton = styled.div`
  margin-top: 5px;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #ff0000;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: 25px;
    color: #d3e2ff;
  }
`;
