import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SneakerAd from "./SneakerAd";

describe("Given a SneakerAd component", () => {
  describe("When it is rendered with an ad", () => {
    test("Then it should show the image, condition and price of it", () => {
      const ad = {
        id: "test",
        brand: "test",
        style: "test",
        colorway: "test",
        condition: 10,
        images: ["test"],
        price: "10.000",
        size: 40,
        likes: 0,
        box: "good",
        state: "new",
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
});
