import { LoadSneakersAction } from "../../Types/Action";
import actionTypes from "../actions/actionTypes";
import { loadAllSneakersThunk, moreInfoSneakerThunk } from "./sneakersThunk";

describe("Given a loadAllSneakersThunk function", () => {
  describe("When it's invoked", () => {
    test("Then it should call the dispatch function", async () => {
      const sneakers = [
        {
          id: "123",
          brand: "Jordan",
          style: "1 high",
          colorway: "Chicago",
          releaseDate: "1/2/1980",
          image: "image",
          averagePrice: "4.000€",
          ads: [],
        },
        {
          id: "123",
          brand: "Jordan",
          style: "1 high",
          colorway: "Chicago",
          releaseDate: "1/2/1980",
          image: "image",
          averagePrice: "4.000€",
          ads: [],
        },
      ];
      const dispatch = jest.fn();
      const action: LoadSneakersAction = {
        type: actionTypes.loadSneakers,
        sneakers,
      };

      await loadAllSneakersThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
});

describe("Given a moreInfoSneakerThunk inner function", () => {
  describe("When it is called with an id", () => {
    test("Then it should call the dispatch function", async () => {
      const sneaker = {
        id: "test",
        brand: "Jordan",
        style: "1 high",
        colorway: "Chicago",
        releaseDate: "1/2/1980",
        image: "image",
        averagePrice: "4.000€",
        ads: [],
      };
      const dispatch = jest.fn();
      const thunkFunction = moreInfoSneakerThunk(sneaker.id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
