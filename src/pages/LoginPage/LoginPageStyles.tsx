import styled from "styled-components";

export const LoginFormPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    width: 80vw;
  }
`;

export const NotRegistered = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-between;
  & p {
    margin: 0px;
  }
  & .LoginPage__registerLink {
    color: red;
  }
  @media (min-width: 600px) {
    font-size: 20px;
    justify-content: center;
    & p {
      margin: 0px;
      padding-right: 10px;
    }
  }
`;
