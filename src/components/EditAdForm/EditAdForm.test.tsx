import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { Ad } from "../../Types/Ad";
import EditAdForm from "./EditAdForm";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockUseDispatch,
  };
});

describe("Given a EditAdForm component", () => {
  describe("When it is rendered with an ad and an action", () => {
    test("Then it should show 4 select boxes, 1 input and a button with the text 'EDIT'", () => {
      const ad: Ad = {
        id: "test",
        brand: "test",
        style: "test",
        colorway: "test",
        condition: 10,
        image1: "test",
        image2: "test",
        image3: "test",
        image4: "test",
        price: "10.000",
        size: 40,
        likes: 0,
        box: "good",
        state: "new",
        owner: "622b15710695a90af3e56a20",
      };
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditAdForm ad={ad} actionOnEdit={() => {}} />
          </BrowserRouter>
        </Provider>
      );

      const selects = screen.getAllByRole("combobox");
      const input = screen.getByRole("textbox", { name: /price/i });
      const button = screen.getByRole("button", { name: /edit/i });
      userEvent.type(input, "test");

      expect(selects).toHaveLength(4);
      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When it is clicked on the edit button", () => {
    test("Then it should call the dispatch function with the data", () => {
      const ad: Ad = {
        id: "test",
        brand: "test",
        style: "test",
        colorway: "test",
        condition: 10,
        image1: "test",
        image2: "test",
        image3: "test",
        image4: "test",
        price: "10.000",
        size: 40,
        likes: 0,
        box: "good",
        state: "new",
        owner: "622b15710695a90af3e56a20",
      };
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditAdForm ad={ad} actionOnEdit={() => {}} />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button", { name: /edit/i });
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
