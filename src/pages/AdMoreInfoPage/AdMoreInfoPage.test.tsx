import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";

import AdInfoPage from "./AdMoreInfoPage";

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
    test("Then it should show an image, 3 headins and 3 textboxes and a button with the text 'DELETE'", () => {
      render(
        <Provider store={store}>
          <AdInfoPage />
        </Provider>
      );

      const headings = screen.getAllByRole("heading");
      const button = screen.getByRole("button", { name: /delete/i });

      expect(headings).toHaveLength(3);
      expect(button).toBeInTheDocument();
    });
  });
  describe("When it is clicked on delete button", () => {
    test("Then ii should call the dispatch function'", () => {
      render(
        <Provider store={store}>
          <AdInfoPage />
        </Provider>
      );

      const button = screen.getByRole("button", { name: /delete/i });
      userEvent.click(button);
      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
