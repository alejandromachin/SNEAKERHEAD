import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvents from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";

describe("Given a SearchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text bar and a button", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SearchBar />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      const input = screen.getByRole("textbox", { name: /search/i });

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });
  });
  describe("When it is submited", () => {
    test("Then it call the action and reset the form", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <SearchBar />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      const input = screen.getByRole("textbox", { name: /search/i });

      userEvents.type(input, "test");

      userEvents.click(button);
    });
  });
});
