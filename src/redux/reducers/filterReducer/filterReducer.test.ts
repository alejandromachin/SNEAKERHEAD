import actionTypes from "../../actions/actionTypes";
import filterReducer from "./filterReducer";

describe("Given an filterReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const size = 40;
      const currentState = [size];

      const newState = filterReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is rendered with a sizeFilterAction", () => {
    test("Then it should return the size and the current state as a new state", () => {
      const size = 40;
      const currentState = [size];

      const sizeFilterAction = {
        type: actionTypes.filterBySize,
        size: 41,
      };
      const newState = filterReducer(currentState, sizeFilterAction);

      expect(newState).toHaveLength(2);
    });
  });
  describe("When it is rendered with a clearFilterAction", () => {
    test("Then it should return an empty state as a new state", () => {
      const size = 40;
      const currentState = [size];

      const clearFilterAction = {
        type: actionTypes.clearFilters,
      };
      const newState = filterReducer(currentState, clearFilterAction);

      expect(newState).toHaveLength(0);
    });
  });
});
