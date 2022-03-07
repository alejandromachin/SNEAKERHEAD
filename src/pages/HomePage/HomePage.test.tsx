import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'SNEAKERHEAD'", () => {
      const expectedHeading = "SNEAKERHEAD";
      render(<HomePage />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
