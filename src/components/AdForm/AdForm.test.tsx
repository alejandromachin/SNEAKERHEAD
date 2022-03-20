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
  describe("When it is clicked on its 'LIST' button", () => {
    test("Then it should call the dispatch function", () => {
      const file = new File(["file"], "file.png", { type: "image/png" });
      const selectedState = "new";
      const selectedCondition = "4";
      const selectedSize = "40";
      const selectedBoxCondition = "Good";

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

      const state = screen.getByRole("combobox", {
        name: /are they used or new?/i,
      });
      const condition = screen.getByRole("combobox", { name: /condition/i });
      const size = screen.getByRole("combobox", { name: /size/i });
      const boxCondition = screen.getByRole("combobox", {
        name: /box/i,
      });
      const price = screen.getByRole("spinbutton", { name: /price/i });

      const images = screen.getAllByText("Click to add a photo");

      userEvent.selectOptions(state, selectedState);
      userEvent.selectOptions(condition, selectedCondition);
      userEvent.selectOptions(size, selectedSize);
      userEvent.selectOptions(boxCondition, selectedBoxCondition);
      userEvent.type(price, "2");
      images.forEach((image) => userEvent.upload(image, file));

      const button = screen.getByRole("button", { name: /list/i });
      userEvent.click(button);

      expect(mockUseDispatch).toHaveBeenCalled();
    });
  });
});
