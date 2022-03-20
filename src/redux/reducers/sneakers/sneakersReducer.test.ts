import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../../actions/actionTypes";
import sneakersReducer from "./sneakersReducer";

describe("Given a sneakersReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState: Sneaker[] = [];

      const newState = sneakersReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is called with an empty state and the loadSneakers action with an array of sneakers", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: Sneaker[] = [];
      const arrayOfSneakers = [
        {
          Brand: "Jordan",
          Model: "1",
          Colorway: "Chicago",
          releaseDate: "april 1990",
          Image: "image",
          AveragePrice: "5.000€",
          Adds: "adds",
        },
      ];
      const action = {
        type: actionTypes.loadSneakers,
        sneakers: arrayOfSneakers,
      };

      const newState = sneakersReducer(currentState, action);

      expect(newState).toEqual(arrayOfSneakers);
    });
  });
  describe("When it is called with an empty state and the loadSpinnerSneakersAction action with an array of sneakers", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: Sneaker[] = [];
      const arrayOfSneakers = [
        {
          Brand: "Jordan",
          Model: "1",
          Colorway: "Chicago",
          releaseDate: "april 1990",
          Image: "image",
          AveragePrice: "5.000€",
          Adds: "adds",
        },
      ];
      const action = {
        type: actionTypes.loadSpinnerSneakers,
        sneakers: arrayOfSneakers,
      };

      const newState = sneakersReducer(currentState, action);

      expect(newState).toEqual(arrayOfSneakers);
    });
  });
  describe("When it is called with an empty state and the loadSneakers action without the sneakerArray", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: Sneaker[] = [];
      const arrayOfSneakers: Sneaker[] = [];
      const action = {
        type: actionTypes.loadSneakers,
        sneakers: arrayOfSneakers,
      };

      const newState = sneakersReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it is called with an empty state and the loadSneakerInfo action without the sneakerArray", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: Sneaker[] = [];

      const action = {
        type: actionTypes.loadSneakerInfo,
      };

      const newState = sneakersReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
