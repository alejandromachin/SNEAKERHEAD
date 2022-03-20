import actionTypes from "../../actions/actionTypes";
import menuReducer from "./menuReducer";

describe("Given an menuReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState = false;

      const newState = menuReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is rendered with changeMenuStateAction", () => {
    test("Then it should return the oposite state as the current state", () => {
      const currentState = false;
      const changeMenuStateAction = {
        type: actionTypes.menuState,
      };
      const newState = menuReducer(currentState, changeMenuStateAction);

      expect(newState).toBe(!currentState);
    });
  });
});
