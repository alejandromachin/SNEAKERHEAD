import styled from "styled-components";

export const SliderContainer = styled.div`
  .slider {
    width: 100vw;
    height: 160px;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    scrollbar-width: none;
    @media (min-width: 600px) {
      width: 80vw;
      height: 180px;
    }
  }
  .slider::-webkit-scrollbar {
    display: none;
  }
  .slide {
    margin-top: 40px;
    padding-left: 5px;
    width: 140px;
    flex-shrink: 0;
    @media (min-width: 600px) {
      width: 160px;
      margin-right: 25px;
    }
  }
  & img {
    width: 140px;
  }
`;

export const SlideContainer = styled.div`
  &.container {
    background-color: #d3e2ff;
    border-radius: 10px;
    height: 120px;
    @media (min-width: 600px) {
      height: 130px;
    }
  }

  & .positioner {
    position: relative;
    top: -30px;
  }
  &.container:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    border: 1px solid #878585;
  }
`;
