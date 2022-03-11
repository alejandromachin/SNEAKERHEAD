import { render, screen } from "@testing-library/react";
import SneakerAd from "./SneakerAd";

describe("Given a SneakerAd component", () => {
  describe("When it is rendered with an ad", () => {
    test("Then it should show the image, condition and price of it", () => {
      const ad = {
        id: "test",
        brand: "test",
        style: "test",
        colorway: "test",
        condition: "10/10",
        images: ["test"],
        price: "10.000",
        likes: 0,
      };
      render(<SneakerAd ad={ad} />);

      const image = screen.getByRole("img", { name: ad.colorway });
      const condition = screen.getByText(ad.condition);
      const price = screen.getByText(ad.price);

      expect(image).toBeInTheDocument();
      expect(condition).toBeInTheDocument();
      expect(price).toBeInTheDocument();
    });
  });
});
