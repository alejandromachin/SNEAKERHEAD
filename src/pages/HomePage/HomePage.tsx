import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SneakerSlider from "../../components/SneakerSlider/SneakerSlider";
import { useDispatch, useSelector } from "react-redux";
import { Sneaker } from "../../Types/Sneaker";
import { useEffect } from "react";
import { loadSpinnerSneakersThunk } from "../../redux/thunks/sneakersThunk";
import { RootState } from "../../redux/store";
import {
  CarouselContainer,
  HomePageContainer,
  SliderContainer,
} from "./HomePageStyles";
import HotDeals from "../../components/HotDeals/HotDeals";
import { loadHotDealsThunk } from "../../redux/thunks/adsThunks";
import { Ad } from "../../Types/Ad";
import { cleanUpAdsAction } from "../../redux/actions/adsActionCreator/adsActionCreator";

const HomePage = (): JSX.Element => {
  const sneakers: Sneaker[] = useSelector((state: RootState) => state.sneakers);
  const ads: Ad[] = useSelector((state: RootState) => state.ads);
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanUp = () => {
      dispatch(cleanUpAdsAction());
    };
    dispatch(loadSpinnerSneakersThunk);
    dispatch(loadHotDealsThunk);
    return cleanUp;
  }, [dispatch]);

  return (
    <HomePageContainer>
      <h1>SNEAKERHEAD</h1>
      <CarouselContainer>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={
            window.matchMedia("(min-width: 600px)").matches ? true : false
          }
        >
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
      <SliderContainer>
        <SneakerSlider sneakers={sneakers} />
      </SliderContainer>
      <HotDeals ads={ads} />
    </HomePageContainer>
  );
};

export default HomePage;
