import styled from "styled-components";

const burgerHeight = 21;

export const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${burgerHeight}px;
  width: min-content;
  justify-content: space-between;
  &.active .burger-bar:nth-child(2) {
    opacity: 0;
  }
  &.active .burger-bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, ${burgerHeight / 2 - 4.5}px);
  }
  &.active .burger-bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -${burgerHeight / 2 - 4.5}px);
  }
  @media (min-width: 600px) {
    display: none;
  } ;
`;

export const BurgerBar = styled.span`
  position: relative;
  width: 30px;
  background-color: #000;
  height: 5px;
  border-radius: 5px;
  transition: all 0.2s;
  margin: 0px;
`;
