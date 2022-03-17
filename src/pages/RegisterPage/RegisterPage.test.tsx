import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with 'REGISTER:' on it", () => {
      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
      const heading = screen.getByRole("heading", { name: /register/i });

      expect(heading).toBeInTheDocument();
    });
  });
});
