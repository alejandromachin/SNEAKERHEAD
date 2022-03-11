import actionTypes from "../../actions/actionTypes";
import sneakerReducer from "./sneakerReducer";

describe("Given a sneakerReducer function", () => {
  describe("When it is called with an empty state and the loadSneakerInfo action with a sneaker", () => {
    test("Then it should return the new state with the sneaker", () => {
      const currentState = {};
      const sneaker = {
        Brand: "Jordan",
        Model: "1",
        Colorway: "Chicago",
        releaseDate: "april 1990",
        Image: "image",
        AveragePrice: "5.000€",
        Adds: "adds",
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
