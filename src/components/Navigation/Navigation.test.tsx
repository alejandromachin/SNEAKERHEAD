import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 6 anchors and an image as anchor", () => {
      const expectedNumberOfAnchors = 6;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </BrowserRouter>
      );

      const anchors = screen.getAllByRole("link").length;

      expect(anchors).toBe(expectedNumberOfAnchors);
    });
  });
});
