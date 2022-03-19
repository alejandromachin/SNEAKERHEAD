import styled from "styled-components";

export const FloatingMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 200px;
  top: 0px;
  left: -500px;
  position: absolute;
  background-color: #e7e7e7;
  transition: all 0.25s;
  transition-timing-function: ease-in-out;
  z-index: 10;
  &.active {
    left: 0px;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
