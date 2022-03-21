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
  @media (min-width: 600px) {
    width: 100vw;
  } ;
`;
export const SliderContainer = styled.div`
  @media (min-width: 600px) {
    width: 80vw;
  } ;
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & li {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 80%;
  } ;
`;
