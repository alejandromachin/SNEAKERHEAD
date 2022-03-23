import styled from "styled-components";

export const SneakerAdListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90vw;

  margin-top: 20px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    align-items: center;
    width: 80vw;
    height: 400px;
    margin-top: 20px;
    justify-content: space-between;
  }
`;
