import styled from "styled-components";

export const SneakersResultsListContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & .sneakerResults_tittle {
    margin-bottom: 0px;
  }
  @media (min-width: 600px) {
    width: 80vw;
  }
`;

export const PaginationButtons = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & button {
    font-size: 25px;
  }
`;

export const NextButtonContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  & button {
    font-size: 25px;
  }
`;
