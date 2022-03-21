import styled from "styled-components";

export const SneakerAdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  gap: 10px;
  & img {
    border: 2px solid #d3e2ff;
    width: 150px;
  }
  @media (min-width: 600px) {
    width: 20vw;
  }
`;
export const SneakerAdListText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & p {
    margin: 0;
  }
`;
