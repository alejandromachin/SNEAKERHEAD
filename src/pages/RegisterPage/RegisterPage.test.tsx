import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import RegisterPage from "./RegisterPage";

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
});
