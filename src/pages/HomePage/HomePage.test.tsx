import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import HomePage from "./HomePage";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => {
    return {
      matches: true,
      media: query,
      onchange: null,
    };
  },
});

describe("Given a HomePage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'SNEAKERHEAD'", () => {
      const expectedHeading = "SNEAKERHEAD";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
