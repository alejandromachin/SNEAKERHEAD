import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import UserPage from "./UserPage";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given an UserInfoPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show 5 headings with the info of the user and 3 links", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserPage />
          </Provider>
        </BrowserRouter>
      );

      const headings = screen.getAllByRole("heading");
      const links = screen.getAllByRole("link");

      expect(headings).toHaveLength(5);
      expect(links).toHaveLength(3);
    });
  });
  describe("When it is clicked on log out", () => {
    test("Then it should show call the dispatch function", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserPage />
          </Provider>
        </BrowserRouter>
      );

      const logOut = screen.getByRole("link", { name: /log out/i });
      userEvent.click(logOut);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
