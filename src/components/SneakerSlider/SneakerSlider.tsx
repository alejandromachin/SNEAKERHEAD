import styled from "styled-components";
import { Sneaker as sneakertype } from "../../Types/Sneaker";
import Sneaker from "../Sneaker/Sneaker";

interface SneakerSliderProps {
  sneakers: sneakertype[];
}

const SliderContainer = styled.div`
  .slider {
    padding: 20px;
    width: 100vw;
    height: 150px;
    display: flex;
    overflow-x: auto;
  }
  .slider::-webkit-scrollbar {
    display: none;
  }
  .slide {
    width: 200px;
    flex-shrink: 0;
    height: 100%;
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
