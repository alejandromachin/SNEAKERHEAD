import styled from "styled-components";

export const EditAdFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 500px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  @media (min-width: 600px) {
    width: 40vw;
    height: 600px;
  }
  & form {
    width: 85%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;

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
    & .uploaded {
      background-color: #1de051;
    }
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      padding: 0px;
      background-color: #d3e2ff;

      width: 100%;
      border: none;
      cursor: pointer;
      text-align: center;
      font-size: 25px;
      color: #ff0000;
      &.AdForm_Button__disabled {
        background-color: #b2b1b1;
      }

      @media (min-width: 600px) {
        margin-top: 10px;
        width: 100%;
        position: static;
      }
    }
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
