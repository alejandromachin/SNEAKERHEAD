import styled from "styled-components";

export const SneakersResultsListContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  & .sneakerResults_tittle {
    margin-bottom: 0px;
  }
`;

export const PaginationButtons = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
