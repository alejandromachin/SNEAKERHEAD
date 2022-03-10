import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;

  & form {
    & input {
      height: 20px;
      width: 35vw;
      border: 1px solid #b2b1b1;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      background-color: #f4f4f4;
    }
    & button {
      height: 24px;
      border: 1px solid #b2b1b1;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
  & .SearchLabel {
    display: none;
  }
  textarea:focus,
  input:focus {
    outline: 1px solid #000;
  }
`;
export const UserAreaContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
