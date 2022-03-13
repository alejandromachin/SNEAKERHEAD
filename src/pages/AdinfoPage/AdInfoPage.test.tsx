import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import AdInfoPage from "./AdInfoPage";

const mockUseParams = { id: "test" };

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useParams: () => mockUseParams,
  };
});

describe("Given a AdInfoPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image, 3 headins and 3 textboxes", () => {
      render(
        <Provider store={store}>
          <AdInfoPage />
        </Provider>
      );

      const headings = screen.getAllByRole("heading");

      expect(headings).toHaveLength(3);
    });
  });
});
