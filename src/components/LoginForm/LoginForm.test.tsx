import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoginForm from "./LoginForm";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a input for the username and one for the password and a button with the text 'LOG IN'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByRole("textbox");
      const password = screen.getByLabelText("Password:");
      const button = screen.getByRole("button", { name: /log in/i });
      userEvent.type(username, "test");

      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When it is clicked on the login button", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByRole("textbox");
      const password = screen.getByLabelText("Password:");
      const button = screen.getByRole("button", { name: /log in/i });
      userEvent.type(username, "test");
      userEvent.type(password, "test");
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
