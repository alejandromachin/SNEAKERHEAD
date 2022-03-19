import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomePage = (): JSX.Element => {
  return (
    <>
      <h1>SNEAKERHEAD</h1>
      <Carousel showThumbs={false} showStatus={false} showArrows={false}>
        <div>
          <img src="/images/homepage_slider/jordan1-bred.png" alt="bred"></img>
        </div>
        <div>
          <img
            src="/images/homepage_slider/mono-sunflower-1.png"
            alt="sunflower"
          ></img>
        </div>
        <div>
          <img src="/images/homepage_slider/jordan4-Sail.png" alt="sail"></img>
        </div>
      </Carousel>
    </>
  );
};

export default HomePage;
