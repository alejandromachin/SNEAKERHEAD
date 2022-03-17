import styled from "styled-components";

export const SpinnerContainer = styled.div`
  margin-top: 180px;
  display: flex;
  height: 50vh;
  flex-direction: column;
  align-items: center;
`;
export const SpinnerDiv = styled.div`
  & img {
    width: 150px;
    display: flex;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }
`;
