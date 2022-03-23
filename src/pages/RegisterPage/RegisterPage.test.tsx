import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import RegisterPage from "./RegisterPage";

const mockUseNavigate = jest.fn();
const mockUser = { name: "test", id: "test" };

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useSelector: (cb: CallableFunction) => cb({ user: mockUser }),
  };
});
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUseNavigate,
  };
});
beforeAll(() => {
  jest.useFakeTimers();
});

describe("Given a RegisterPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'REGISTER:' on it", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );
      const heading = screen.getByRole("heading", { name: /register/i });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the registered was ok", () => {
    test("Then it should show call the navigation method", () => {
      jest.advanceTimersByTime(1000);
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
