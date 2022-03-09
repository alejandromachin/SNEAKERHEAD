import { render, screen } from "@testing-library/react";
import { Sneaker } from "../../Types/Sneaker";
import SneakersList from "./SneakersList";

describe("Given a SneakersList component", () => {
  describe("When it is rendered with an array of sneakers", () => {
    test("Then it should show the images of all of them", () => {
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

      render(<SneakersList sneakers={sneakerArray} />);

      const images = screen.getAllByRole("img").length;

      expect(images).toBe(sneakerArray.length);
    });
  });
});
