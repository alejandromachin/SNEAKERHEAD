import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'NOT FOUND'", () => {
      const expectedHeading = "NOT FOUND";
      render(<NotFoundPage />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
