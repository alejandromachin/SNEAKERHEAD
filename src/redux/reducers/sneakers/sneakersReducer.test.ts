import { LoadSneakersAction } from "../../../Types/Action";
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
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
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
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
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
  describe("When it is called with an empty state loadSneakersByParamAction with an array of sneakers", () => {
    test("Then it should return the new state with the array of sneakers", () => {
      const currentState: Sneaker[] = [];
      const sneakers = [
        {
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
          ads: [],
        },
        {
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
          ads: [],
        },
      ];
      const loadSneakersByParamAction: LoadSneakersAction = {
        type: actionTypes.loadSneakersByParam,
        sneakers,
      };

      const newState = sneakersReducer(currentState, loadSneakersByParamAction);

      expect(newState).toEqual(sneakers);
    });
  });
  describe("When it is called with a state of an array of sneakers and the cleanUpSneakersAction", () => {
    test("Then it should return an empty new state", () => {
      const currentState: Sneaker[] = [
        {
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
          ads: [],
        },
        {
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
          ads: [],
        },
      ];
      const expectedNewState: Sneaker[] = [];

      const cleanUpSneakersAction = {
        type: actionTypes.cleanUpSneakers,
      };

      const newState = sneakersReducer(currentState, cleanUpSneakersAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
