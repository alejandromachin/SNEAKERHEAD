import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import RegisterForm from "./RegisterForm";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 5 textboxes and 1 button with the text 'REGISTER'", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const textboxes = screen.getAllByRole("textbox");
      const button = screen.getByRole("button", { name: /register/i });

      expect(button).toBeInTheDocument();
      expect(textboxes).toHaveLength(5);
    });
  });
  describe("When it is clicked on its submit button", () => {
    test("Then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const button = screen.getByRole("button", { name: /register/i });
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
