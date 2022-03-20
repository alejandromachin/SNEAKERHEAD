import axios from "axios";
import { LoadSneakersAction } from "../../Types/Action";
import actionTypes from "../actions/actionTypes";
import {
  loadAllSneakersThunk,
  loadSpinnerSneakersThunk,
  moreInfoSneakerThunk,
} from "./sneakersThunk";

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
      const limit = 2;
      const skip = 3;
      const dispatch = jest.fn();
      const action: LoadSneakersAction = {
        type: actionTypes.loadSneakers,
        sneakers,
      };

      const thunk = loadAllSneakersThunk(limit, skip);

      await thunk(dispatch);

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
describe("Given a loadSpinnerSneakersThunk function", () => {
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
        type: actionTypes.loadSpinnerSneakers,
        sneakers,
      };

      await loadSpinnerSneakersThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });
  describe("When it has an error on fetching", () => {
    test("Then it should call the dispatch function with the error action", async () => {
      jest.mock("axios");

      const error = { response: { data: "error" } };
      axios.get = jest.fn().mockRejectedValue(error);
      const dispatch = jest.fn();

      await loadSpinnerSneakersThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
