import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 3 anchors and an image as anchor", () => {
      const expectedNumberOfAnchors = 4;
      const expectedImageName = "burger-menu";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const anchors = screen.getAllByRole("link").length;
      const image = screen.getByRole("img", { name: expectedImageName });

      expect(anchors).toBe(expectedNumberOfAnchors);
      expect(image).toBeInTheDocument();
    });
  });
});
