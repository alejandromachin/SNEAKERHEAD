import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import LoginPage from "./LoginPage";

const mockUser = { name: "test", id: "test" };
const mockUseNavigate = jest.fn();
const mockToast = jest.fn();

jest.mock("react-hot-toast", () => {
  return {
    ...jest.requireActual("react-hot-toast"),
    success: () => mockToast,
  };
});
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

describe("Given a LoginPage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'LOG IN'", () => {
      const expectedHeading = "LOG IN:";
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage />
          </Provider>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
