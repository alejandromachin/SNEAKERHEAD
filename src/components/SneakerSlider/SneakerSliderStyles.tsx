import styled from "styled-components";

export const SliderContainer = styled.div`
  .slider {
    width: 100vw;
    height: 160px;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    scrollbar-width: none;
    gap: 10px;
    @media (min-width: 600px) {
      gap: 0px;
      width: 80vw;
      height: 180px;
    }
  }
  .slider::-webkit-scrollbar {
    display: none;
  }
  .slide {
    margin-top: 35px;
    padding-left: 5px;
    width: 140px;
    flex-shrink: 0;
    @media (min-width: 600px) {
      margin-top: 40px;
      width: 120px;
      margin-right: 25px;
    }
  }
  & img {
    width: 120px;
  }
`;

export const SlideContainer = styled.div`
  &.container {
    background-color: #d3e2ff;
    border-radius: 10px;
    height: 120px;

    & .sneaker_colorway {
      font-size: 16px;
    }
    & .sneaker_price {
      font-size: 18px;
    }

    & .positioner {
      position: relative;
      top: -30px;
      right: 5px;
    }
    &.container:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      border: 1px solid #878585;
    }

    @media (min-width: 600px) {
      height: 110px;

      & .sneaker_name {
        font-size: 15px;
      }
      & .sneaker_colorway {
        font-size: 14px;
      }
      & .positioner {
        position: relative;
        top: -30px;
        right: 24px;
      }
    }
  }
`;
