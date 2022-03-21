import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`;
export const UserTittle = styled.div`
  display: flex;
  width: 200px;
  font-size: 22px;
  border-bottom: 1px solid #000;
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
`;
export const UserNav = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  gap: 10px;
  align-items: flex-end;
`;
