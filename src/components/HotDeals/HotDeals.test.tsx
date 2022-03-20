import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import HotDeals from "./HotDeals";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate,
  };
});

describe("Given a HotDeals component", () => {
  describe("When it is rendered with 1 ad", () => {
    test("Then it should show a heading with the text 'HOT DEALS' and 1 image", () => {
      const ads = [
        {
          id: "test1",
          brand: "test",
          style: "test",
          colorway: "test",
          image1: "test",
          image2: "test",
          image3: "test",
          image4: "test",
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
          owner: "622b15710695a90af3e56a20",
        },
      ];
      render(
        <BrowserRouter>
          <HotDeals ads={ads} />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: /hot deals/i });
      const images = screen.getAllByRole("img");

      expect(heading).toBeInTheDocument();
      expect(images).toHaveLength(1);
    });
  });
  describe("When it is rendered with 1 ad and the ad is clicked", () => {
    test("Then it should show call the navigate method", () => {
      const ads = [
        {
          id: "test1",
          brand: "test",
          style: "test",
          colorway: "test",
          image1: "test",
          image2: "test",
          image3: "test",
          image4: "test",
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
          owner: "622b15710695a90af3e56a20",
        },
      ];
      render(
        <BrowserRouter>
          <HotDeals ads={ads} />
        </BrowserRouter>
      );

      const image = screen.getByRole("img");
      userEvent.click(image);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
