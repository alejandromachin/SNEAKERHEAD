import actionTypes from "../../actions/actionTypes";
import sneakerReducer from "./sneakerReducer";

describe("Given a sneakerReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState = {};

      const newState = sneakerReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is called with an empty state and the loadSneakerInfo action with a sneaker", () => {
    test("Then it should return the new state with the sneaker", () => {
      const currentState = {};
      const sneaker = {
        brand: "Jordan",
        model: "1",
        colorway: "Chicago",
        releaseDate: "april 1990",
        image: "image",
        averagePrice: "5.000€",
        ads: "ads",
      };

      const action = {
        type: actionTypes.loadSneakerInfo,
        sneaker,
      };

      const newState = sneakerReducer(currentState, action);

      expect(newState).toEqual(sneaker);
    });
  });
});
