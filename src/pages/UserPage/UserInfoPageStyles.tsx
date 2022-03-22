import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 80vh;
  @media (min-width: 600px) {
    width: 80vw;

    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const UserTittle = styled.div`
  display: flex;
  width: 200px;
  font-size: 22px;

  border-bottom: 1px solid #000;
  @media (min-width: 600px) {
    margin: 20px;
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  font-size: 18px;
  height: 350px;
  margin: 0px;
  & h3 {
    font-family: Helvetica, sans-serif;
    font-weight: 900;
    margin: 0px;
  }
  @media (min-width: 600px) {
    width: 40%;
    margin: 20px;
    font-size: 22px;
  }
`;
export const UserNav = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  gap: 10px;
  align-items: flex-end;

  @media (min-width: 600px) {
    width: 40vw;
    margin: 20px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;
