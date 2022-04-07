import styled from "styled-components";

interface NavigationProps {
  readonly isLogged: boolean;
}

export const NavigationContainer = styled.div<NavigationProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  align-items: center;

  & .logo {
    display: none;
    font-size: 20px;
    justify-content: flex-start;
    text-shadow: 1px 0 #000, 1px 0 #000, 1px 0 #000, 1px 0 #000;
  }

  @media (min-width: 600px) {
    width: 80vw;
    & .logo {
      font-size: 30px;
      display: flex;
    }
  }

  & form {
    & input {
      height: 20px;
      width: ${(props) => (props.isLogged ? "50vw" : "30vw")};
      border: 1px solid #b2b1b1;
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      background-color: #f4f4f4;
      @media (min-width: 600px) {
        height: 30px;
        width: 40vw;
      }
    }
    & button {
      height: 24px;
      border: 1px solid #b2b1b1;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      @media (min-width: 600px) {
        height: 34px;
        width: 34px;
      }
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

export const UserAreaContainer = styled.div<NavigationProps>`
  width: ${(props) => (props.isLogged ? "10vw" : "35vw")};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 18px;
  margin: 5px;
  padding-right: ${(props) => (props.isLogged ? "10px" : "0px")};
  margin-top: 0px;
  @media (min-width: 600px) {
    justify-content: ${(props) =>
      props.isLogged ? "flex-end" : "space-around"};
    padding-right: 0px;
    font-size: 25px;
    width: 20vw;
  }
`;
