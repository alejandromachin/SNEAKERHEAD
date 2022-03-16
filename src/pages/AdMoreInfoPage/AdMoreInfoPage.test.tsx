import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";

import AdMoreInfoPage from "./AdMoreInfoPage";

const mockUseParams = { id: "test" };
const mockUseDispatch = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useParams: () => mockUseParams,
  };
});

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a AdInfoPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image, 3 headins and 3 textboxes and a button with the text 'EDIT'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AdMoreInfoPage />
          </Provider>
        </BrowserRouter>
      );

      const headings = screen.getAllByRole("heading");
      const button = screen.getByRole("button", { name: /edit/i });

      expect(headings).toHaveLength(3);
      expect(button).toBeInTheDocument();
    });
  });
});
