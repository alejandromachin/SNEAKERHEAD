import styled from "styled-components";
import { Sneaker as sneakertype } from "../../Types/Sneaker";
import Sneaker from "../Sneaker/Sneaker";

interface SneakerSliderProps {
  sneakers: sneakertype[];
}

const SliderContainer = styled.div`
  .slider {
    width: 100vw;
    height: 160px;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    background-color: #d3e2ff;
  }
  .slider::-webkit-scrollbar {
    display: none;
  }
  .slide {
    margin-top: 10px;
    padding-left: 5px;
    width: 140px;
    flex-shrink: 0;
  }
  & img {
    width: 140px;
  }
`;

const SneakerSlider = ({ sneakers }: SneakerSliderProps): JSX.Element => {
  return (
    <SliderContainer>
      <div className="slider">
        {sneakers.map((sneaker) => (
          <div className="slide">
            <Sneaker sneaker={sneaker} />
          </div>
        ))}
      </div>
    </SliderContainer>
  );
};

export default SneakerSlider;
