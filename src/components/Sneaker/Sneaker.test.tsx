import { render, screen } from "@testing-library/react";
import { Sneaker as sneakerType } from "../../Types/Sneaker";
import Sneaker from "./Sneaker";

describe("Given a Sneaker component", () => {
  describe("When it is rendered with a sneaker", () => {
    test("Then it should show the image, brand, style, colorway and averageprice of it", () => {
      const sneaker: sneakerType = {
        id: "123",
        brand: "Jordan",
        style: "1 high",
        colorway: "Chicago",
        releaseDate: "1/2/1980",
        image: "image",
        averagePrice: "4.000€",
        ads: [],
      };

      render(<Sneaker sneaker={sneaker} />);

      const image = screen.getByRole("img", { name: sneaker.colorway });
      const brand = screen.getByText(`${sneaker.brand} ${sneaker.style}`);
      const colorway = screen.getByText(sneaker.colorway);
      const price = screen.getByText(sneaker.averagePrice);

      expect(image).toBeInTheDocument();
      expect(brand).toBeInTheDocument();
      expect(colorway).toBeInTheDocument();
      expect(price).toBeInTheDocument();
    });
  });
});
