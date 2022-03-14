import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Ad } from "../../Types/Ad";
import SneakerAdList from "./SneakerAdList";

describe("Given a SneakerAdList component", () => {
  describe("When it is rendered with an array of 2 ads", () => {
    test("Then it should show one image of each", () => {
      const ads: Ad[] = [
        {
          id: "test1",
          brand: "test",
          style: "test",
          colorway: "test",
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
        },
        {
          id: "test2",
          brand: "test",
          style: "test",
          colorway: "test",
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
        },
      ];

      render(
        <BrowserRouter>
          <SneakerAdList ads={ads} />
        </BrowserRouter>
      );

      const images = screen.getAllByRole("img");

      expect(images).toHaveLength(2);
    });
  });
});
