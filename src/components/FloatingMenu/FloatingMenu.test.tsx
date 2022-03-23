import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import FloatingMenu from "./FloatingMenu";
const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a FloatingMenu component", () => {
  describe("When is clicked on its close button", () => {
    test("Then it should call the dispatch method", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <FloatingMenu />
          </Provider>
        </BrowserRouter>
      );

      const homeButton = screen.getByText("Home");

      userEvent.click(homeButton);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
