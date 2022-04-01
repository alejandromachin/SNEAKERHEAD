import styled from "styled-components";

export const SneakerAdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;

  & img {
    border: 2px solid #d3e2ff;
    width: 150px;
  }
  @media (min-width: 600px) {
    width: 300px;
    & img {
      width: 300px;
      height: 300px;
    }
    &:hover {
      & p {
        color: red;
      }
    }
  }
`;
export const SneakerAdListText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  background-color: #d3e2ff;
  width: 304px;

  & p {
    margin: 0;
  }
  @media (min-width: 600px) {
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    & p {
      margin: 10px;
      font-size: 20px;
    }
    & .sneakerAd__price {
      font-size: 25px;
    }
  }
`;
