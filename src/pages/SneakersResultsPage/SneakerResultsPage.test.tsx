import { render, screen } from "@testing-library/react";
import SneakerResultsPage from "./SneakersResultsPage";

describe("Given a SneakerResultsPage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'RESULTS:'", () => {
      const expectedHeading = "RESULTS:";

      render(<SneakerResultsPage />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
