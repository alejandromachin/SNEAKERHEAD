import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigation from "./Navigation";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
    };
  },
});

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 5 anchors and an image as anchor", () => {
      const expectedNumberOfAnchors = 5;

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
