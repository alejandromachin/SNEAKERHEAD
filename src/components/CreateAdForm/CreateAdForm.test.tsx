import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { Sneaker } from "../../Types/Sneaker";
import CreateAdForm from "./CreateAdForm";

describe("Given a CreateAdForm component", () => {
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
          <CreateAdForm sneaker={sneaker} userId={"userID"} />
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
});
