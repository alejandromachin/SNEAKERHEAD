import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SneakersResultsPage from "./SneakersResultsPage";

describe("Given a SneakerResultsPage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'RESULTS:'", () => {
      const expectedHeading = "RESULTS:";

      render(
        <Provider store={store}>
          <SneakersResultsPage />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
