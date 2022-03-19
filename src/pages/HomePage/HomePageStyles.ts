import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 100vw;
  & h1 {
    justify-content: flex-start;
    text-shadow: 1px 0 #000, 1px 0 #000, 1px 0 #000, 1px 0 #000;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & li {
    width: 100%;
  }
`;
