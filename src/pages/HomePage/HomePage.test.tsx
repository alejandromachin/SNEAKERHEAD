import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'SNEAKERHEAD'", () => {
      const expectedHeading = "SNEAKERHEAD";
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
