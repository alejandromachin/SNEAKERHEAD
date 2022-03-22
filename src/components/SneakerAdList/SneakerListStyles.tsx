import styled from "styled-components";

export const SneakerAdListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80vw;
  @media (min-width: 600px) {
    align-items: center;
    margin-top: 20px;
    justify-content: space-between;
  }
`;
