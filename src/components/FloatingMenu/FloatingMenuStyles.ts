import styled from "styled-components";

export const FloatingMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  width: 200px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 10px;
  top: 0px;
  left: -500px;
  position: absolute;
  background-color: #e7e7e7;
  transition: all 0.25s;
  transition-timing-function: ease-in-out;
  z-index: 10;
  box-shadow: 6px 6px 22px -11px rgba(0, 0, 0, 0.75);
  &.active {
    left: 0px;
  }
  & p {
    width: 100px;
    text-align: left;
    font-size: 35px;
    padding-bottom: 10px;
    margin: 0px;
    margin-top: 50px;
    border-bottom: 1px solid #000;
  }
  & ul {
    list-style: none;
    margin-top: 0px;
    padding: 0px;

    & li {
      font-size: 20px;
      text-align: left;
      margin: 5px;

      &.FloatinMenu__Register {
        color: #ff0000;
        font-size: 25px;
      }
    }
  }
  @media (min-width: 600px) {
    display: none;
  }
`;
