import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Sneaker as sneakerType } from "../../Types/Sneaker";
import Sneaker from "./Sneaker";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate,
  };
});

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

      render(
        <BrowserRouter>
          <Sneaker sneaker={sneaker} />
        </BrowserRouter>
      );

      const image = screen.getByRole("img", { name: sneaker.colorway });
      const brand = screen.getByText(`${sneaker.brand} ${sneaker.style}`);
      const colorway = screen.getByText(`${sneaker.colorway}`);
      const price = screen.getByText(`${sneaker.averagePrice}`);

      expect(image).toBeInTheDocument();
      expect(brand).toBeInTheDocument();
      expect(colorway).toBeInTheDocument();
      expect(price).toBeInTheDocument();
    });
  });
  describe("When the user clicks on the image", () => {
    test("Then it should call the navigate method with the id of the sneaker", () => {
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
      const path = `/sneakers/${sneaker.id}`;

      render(
        <BrowserRouter>
          <Sneaker sneaker={sneaker} />
        </BrowserRouter>
      );

      const image = screen.getByRole("img");
      userEvent.click(image);

      expect(mockUseNavigate).toHaveBeenCalledWith(path);
    });
  });
});
