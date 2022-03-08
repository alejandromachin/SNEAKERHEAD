import errorTypes from "../errorTypes";
import { errorAction } from "./errorActionCreator";

describe("Given an errorAction function", () => {
  describe("When it is called with an error message", () => {
    test("Then it should return an object with the type and the error message", () => {
      const errorMessage = "test";
      const expectedAction = {
        type: errorTypes.error,
        errorMessage,
      };

      const action = errorAction(errorMessage);

      expect(action).toEqual(expectedAction);
    });
  });
});
