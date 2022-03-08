import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Given a SearchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a text bar and a button", () => {
      const action = () => {};
      render(<SearchBar action={action} />);

      const button = screen.getByRole("button");
      const input = screen.getByRole("textbox", { name: /search/i });

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });
  });
});
