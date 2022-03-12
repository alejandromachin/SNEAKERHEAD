import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SneakerInfoPage from "./SneakerInfoPage";

const mockUseParams = { id: "test" };

jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useParams: () => mockUseParams,
  };
});

describe("Given a SneakerInfoPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image and a button", async () => {
      render(
        <Provider store={store}>
          <SneakerInfoPage />
        </Provider>
      );

      const image = screen.getByRole("img");
      const button = screen.getByRole("button");

      expect(image).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When its button is clicked", () => {
    test("Then it should load more 2 more ads", async () => {
      render(
        <Provider store={store}>
          <SneakerInfoPage />
        </Provider>
      );

      const button = screen.getByRole("button");

      userEvent.click(button);
    });
  });
});
