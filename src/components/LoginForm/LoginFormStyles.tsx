import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  min-height: 20vh;
  align-items: center;
  font-size: 20px;
  @media (min-width: 600px) {
    width: 100%;
  }
  & form {
    width: 80%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 40px;
    gap: 5px;
    background-color: #d3e2ff;
    border: 2px solid #b2b1b1;
    border-radius: 10px;
    & select,
    input {
      padding-left: 10px;
      font-size: 20px;
      height: 30px;
      border: 1px solid #b2b1b1;
      border-radius: 2px;
      background-color: #f4f4f4;
    }
    & select:focus,
    input:focus {
      outline: 3px solid #d3e2ff;
    }
    & input[type="file"] {
      display: none;
    }
    & .adForm__fileUpload {
      text-align: center;
      border: 1px solid #b2b1b1;
      background-color: #d3e2ff;
      padding: 6px 12px;
      cursor: pointer;
    }
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      background-color: #d3e2ff;
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100%;
      border: none;
      cursor: pointer;
      text-align: center;
      font-size: 25px;
      color: #ff0000;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 85%;
  height: 100%;
`;
