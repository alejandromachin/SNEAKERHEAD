import actionTypes from "../../actions/actionTypes";
import sneakersReducer from "./sneakersReducer";

describe("Given a sneakersReducer function", () => {
  describe("When it is called with an empty state and the loadSneakers action with an array of sneakers", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: [] = [];
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
  describe("When it is called with an empty state and the loadSneakers action without the sneakerArray", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: [] = [];

      const action = {
        type: actionTypes.loadSneakers,
      };

      const newState = sneakersReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it is called with an empty state and the loadSneakerInfo action without the sneakerArray", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: [] = [];

      const action = {
        type: actionTypes.loadSneakerInfo,
      };

      const newState = sneakersReducer(currentState, action);

      expect(newState).toEqual(currentState);
    });
  });
});
