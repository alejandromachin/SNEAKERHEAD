import actionTypes from "../actionTypes";
import { changeMenuStateAction } from "./menuActionCreator";

describe("Given an changeMenuStateAction function", () => {
  describe("When it is called", () => {
    test("Then it should return an object with the type", () => {
      const expectedAction = {
        type: actionTypes.menuState,
      };

      const action = changeMenuStateAction();

      expect(action).toEqual(expectedAction);
    });
  });
});
