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
    margin-top: 70px;
  }
`;
export const AdMoreInfoCarousel = styled.div`
  display: flex;
  @media (min-width: 600px) {
    max-width: 550px;
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
  height: 600px;
  @media (min-width: 600px) {
    height: 700px;
  }
`;
export const DeleteButton = styled.div`
  margin-top: 10px;
  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #ff0000;

    width: 100%;
    border: none;
    cursor: pointer;
    text-align: center;
    font-size: 25px;
    color: #d3e2ff;
    @media (min-width: 600px) {
      width: 34vw;
      bottom: -100px;
    }
  }
`;
export const ContactInfoContainer = styled.div`
  display: flex;
  position: absolute;
  top: 25%;
  left: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vh;
  height: 20vh;
  border-radius: 20px;
  border: 3px solid #000;
  box-shadow: -17px 5px 46px -16px rgba(0, 0, 0, 0.57);
  background-color: #d3e2ff;
  & p {
    text-align: center;
    font-size: 20px;
  }
  @media (min-width: 600px) {
    top: 70%;
    left: 60%;
  }
`;
