import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SneakersResultsPage from "./SneakersResultsPage";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => {
    return {
      matches: true,
      media: query,
      onchange: null,
    };
  },
});

describe("Given a SneakerResultsPage component", () => {
  describe("When it is instantiated", () => {
    test("Then it should show a heading with the text 'RESULTS:'", () => {
      const expectedHeading = "RESULTS:";

      render(
        <Provider store={store}>
          <SneakersResultsPage />
        </Provider>
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it is clicked on the prevoius button", () => {
    test("Then it should call the dispatch method", () => {
      render(
        <Provider store={store}>
          <SneakersResultsPage />
        </Provider>
      );

      const buttonNext = screen.getByRole("button", { name: /next/i });
      userEvent.click(buttonNext);

      const button = screen.getByRole("button", { name: /previous/i });
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalledTimes(3);
    });
  });

  describe("When it is clicked on the next button", () => {
    test("Then it should call the dispatch method", async () => {
      render(
        <Provider store={store}>
          <SneakersResultsPage />
        </Provider>
      );

      const buttonNext = screen.getByRole("button", { name: /next/i });
      userEvent.click(buttonNext);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
