import styled from "styled-components";
import { Sneaker as sneakertype } from "../../Types/Sneaker";
import Sneaker from "../Sneaker/Sneaker";
import { SlideContainer, SliderContainer } from "./SneakerSliderStyles";

interface SneakerSliderProps {
  sneakers: sneakertype[];
}

const SneakerSlider = ({ sneakers }: SneakerSliderProps): JSX.Element => {
  return (
    <SliderContainer>
      <div className="slider">
        {sneakers.map((sneaker) => (
          <div className="slide" key={`${sneaker.style} ${sneaker.colorway}`}>
            <SlideContainer className="container">
              <div className="positioner">
                <Sneaker sneaker={sneaker} />
              </div>
            </SlideContainer>
          </div>
        ))}
      </div>
    </SliderContainer>
  );
};

export default SneakerSlider;
