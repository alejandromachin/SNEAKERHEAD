import errorTypes from "../errorTypes";
import {
  errorAction,
  errorOnLoginAction,
  errorOnRegisterAction,
} from "./errorActionCreator";

describe("Given an errorAction function", () => {
  describe("When it is called with an error message", () => {
    test("Then it should return an object with the type and the error object", () => {
      const error = {
        error: true,
        message: "General error",
        code: 404,
      };
      const expectedAction = {
        type: errorTypes.error,
        error,
      };

      const action = errorAction(error);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given an errorOnLoginAction function", () => {
  describe("When it is called with an error message", () => {
    test("Then it should return an object with the type and the error object", () => {
      const error = {
        error: true,
        message: "General error",
        code: 404,
      };
      const expectedAction = {
        type: errorTypes.login,
        error,
      };

      const action = errorOnLoginAction(error);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given an errorOnRegisterAction function", () => {
  describe("When it is called with an error message", () => {
    test("Then it should return an object with the type and the error object", () => {
      const error = {
        error: true,
        message: "General error",
        code: 404,
      };
      const expectedAction = {
        type: errorTypes.register,
        error,
      };

      const action = errorOnRegisterAction(error);

      expect(action).toEqual(expectedAction);
    });
  });
});
