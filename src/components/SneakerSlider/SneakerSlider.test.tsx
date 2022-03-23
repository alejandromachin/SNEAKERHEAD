import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Sneaker } from "../../Types/Sneaker";
import SneakerSlider from "./SneakerSlider";

describe("Given a SneakerSlider component", () => {
  describe("When it is rendered with an array of sneakers", () => {
    test("Then it should show that number of sneakers images", () => {
      const sneakerArray: Sneaker[] = [
        {
          id: "123",
          brand: "Jordan",
          style: "1 high",
          colorway: "Chicago",
          releaseDate: "1/2/1980",
          image: "image",
          averagePrice: "4.000€",
          ads: [],
        },
      ];
      const expectedImages = sneakerArray.length;

      render(
        <BrowserRouter>
          <SneakerSlider sneakers={sneakerArray} />
        </BrowserRouter>
      );

      const images = screen.getAllByRole("img");

      expect(images).toHaveLength(expectedImages);
    });
  });
});
