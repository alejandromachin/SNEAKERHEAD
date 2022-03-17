import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import UserPage from "./UserPage";

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
});
