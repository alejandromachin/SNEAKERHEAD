import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SneakerAd from "./SneakerAd";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate,
  };
});

describe("Given a SneakerAd component", () => {
  describe("When it is rendered with an ad", () => {
    test("Then it should show the image, condition and price of it", () => {
      const ad = {
        id: "test",
        brand: "test",
        style: "test",
        colorway: "test",
        condition: 10,
        image1: "test",
        image2: "test",
        image3: "test",
        image4: "test",
        price: "10.000",
        size: 40,
        likes: 0,
        box: "good",
        state: "new",
        owner: "622b15710695a90af3e56a20",
        ownerEmail: "test@email.com",
      };
      render(
        <BrowserRouter>
          <SneakerAd ad={ad} />
        </BrowserRouter>
      );

      const image = screen.getByRole("img", { name: ad.colorway });
      const condition = screen.getByText(`Condition: ${ad.condition}/10`);
      const price = screen.getByText(ad.price);

      expect(image).toBeInTheDocument();
      expect(condition).toBeInTheDocument();
      expect(price).toBeInTheDocument();
    });
  });
  describe("When it is rendered with an ad and its clicked on its image", () => {
    test("Then it should call the navigate method", () => {
      const ad = {
        id: "test",
        brand: "test",
        style: "test",
        colorway: "test",
        condition: 10,
        image1: "test",
        image2: "test",
        image3: "test",
        image4: "test",
        price: "10.000",
        size: 40,
        likes: 0,
        box: "good",
        state: "new",
        owner: "622b15710695a90af3e56a20",
        ownerEmail: "test@email.com",
      };
      render(
        <BrowserRouter>
          <SneakerAd ad={ad} />
        </BrowserRouter>
      );

      const image = screen.getByRole("img", { name: ad.colorway });
      userEvent.click(image);

      expect(image).toBeInTheDocument();
      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
