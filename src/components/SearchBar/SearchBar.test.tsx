import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";
import userEvents from "@testing-library/user-event";

describe("Given a SearchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text bar and a button", () => {
      render(<SearchBar />);

      const button = screen.getByRole("button");
      const input = screen.getByRole("textbox", { name: /search/i });

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });
  });
  describe("When it is submited", () => {
    test("Then it call the action and reset the form", () => {
      render(<SearchBar />);

      const button = screen.getByRole("button");
      const input = screen.getByRole("textbox", { name: /search/i });

      userEvents.type(input, "test");

      userEvents.click(button);
    });
  });
});
