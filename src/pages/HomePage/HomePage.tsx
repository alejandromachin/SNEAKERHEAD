import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SneakerSlider from "../../components/SneakerSlider/SneakerSlider";
import { useDispatch, useSelector } from "react-redux";
import { Sneaker } from "../../Types/Sneaker";
import { useEffect } from "react";
import { loadAllSneakersThunk } from "../../redux/thunks/sneakersThunk";
import { RootState } from "../../redux/store";
import { CarouselContainer, HomePageContainer } from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  const sneakers: Sneaker[] = useSelector((state: RootState) => state.sneakers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllSneakersThunk);
  }, [dispatch]);
  return (
    <HomePageContainer>
      <h1>SNEAKERHEAD</h1>
      <CarouselContainer>
        <Carousel showThumbs={false} showStatus={false} showArrows={false}>
          <div>
            <img
              src="/images/homepage_slider/jordan1-bred.png"
              alt="bred"
            ></img>
          </div>
          <div>
            <img
              src="/images/homepage_slider/mono-sunflower-1.png"
              alt="sunflower"
            ></img>
          </div>
          <div>
            <img
              src="/images/homepage_slider/jordan4-Sail.png"
              alt="sail"
            ></img>
          </div>
        </Carousel>
      </CarouselContainer>
      <SneakerSlider sneakers={sneakers} />
    </HomePageContainer>
  );
};

export default HomePage;
