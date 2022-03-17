import { SpinnerContainer, SpinnerDiv } from "./SpinnerStyles";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <p>Loading...</p>
      <SpinnerDiv>
        <img src="./spinner.png" alt="loading" />
      </SpinnerDiv>
    </SpinnerContainer>
  );
};

export default Spinner;
