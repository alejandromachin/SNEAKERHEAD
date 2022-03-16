import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Sneaker } from "../../Types/Sneaker";
import AdForm from "./AdForm";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a AdForm component", () => {
  describe("When it is rendered with a user id and a sneaker", () => {
    test("Then it should show 4 select boxes, 1 textbox and 1 button with the text 'LIST'", () => {
      const sneaker: Sneaker = {
        id: "123",
        brand: "Jordan",
        style: "1 high",
        colorway: "Chicago",
        releaseDate: "1/2/1980",
        image: "image",
        averagePrice: "4.000€",
        ads: [],
      };
      render(
        <Provider store={store}>
          <AdForm sneaker={sneaker} userId={"userID"} />
        </Provider>
      );

      const selects = screen.getAllByRole("combobox");
      const text = screen.getByRole("textbox");
      const button = screen.getByRole("button", { name: /list/i });

      expect(selects).toHaveLength(4);
      expect(text).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is clicked on its 'LIST' button", () => {
    test("Then it should call the dispatch function", () => {
      const sneaker: Sneaker = {
        id: "123",
        brand: "Jordan",
        style: "1 high",
        colorway: "Chicago",
        releaseDate: "1/2/1980",
        image: "image",
        averagePrice: "4.000€",
        ads: [],
      };
      render(
        <Provider store={store}>
          <AdForm sneaker={sneaker} userId={"userID"} />
        </Provider>
      );

      const button = screen.getByRole("button", { name: /list/i });

      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
