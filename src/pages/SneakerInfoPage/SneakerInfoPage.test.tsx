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
    test("Then it should show an image and a button to sell and a button to load more", async () => {
      render(
        <Provider store={store}>
          <SneakerInfoPage />
        </Provider>
      );

      const image = screen.getByRole("img");
      const buttonSell = screen.getByRole("button", { name: "SELL" });
      const buttonLoad = screen.getByRole("button", { name: "LOAD MORE" });

      expect(image).toBeInTheDocument();
      expect(buttonSell).toBeInTheDocument();
      expect(buttonLoad).toBeInTheDocument();
    });
  });
  describe("When its button is clicked", () => {
    test("Then it should load more 2 more ads", async () => {
      render(
        <Provider store={store}>
          <SneakerInfoPage />
        </Provider>
      );

      const buttonLoad = screen.getByRole("button", { name: "LOAD MORE" });

      userEvent.click(buttonLoad);
    });
  });
});
