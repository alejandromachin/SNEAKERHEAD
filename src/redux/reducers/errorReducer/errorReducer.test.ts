import { Error } from "../../../Types/Error";
import errorTypes from "../../actions/errorTypes";
import errorReducer from "./errorReducer";

describe("Given an errorReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState = {};

      const newState = errorReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is rendered with an errorAction", () => {
    test("Then it should return the error as the current state", () => {
      const currentState = {};
      const error = {
        error: true,
        message: "General error",
        code: 404,
      };
      const errorAction = {
        type: errorTypes.error,
        error,
      };

      const newState = errorReducer(currentState, errorAction);

      expect(newState).toEqual(error);
    });
  });
  describe("When it is rendered with an errorOnLoginAction", () => {
    test("Then it should return the error as the current state", () => {
      const currentState = {};
      const error = {
        error: true,
        message: "login error",
        code: 404,
      };
      const errorOnLoginAction = {
        type: errorTypes.login,
        error,
      };

      const newState = errorReducer(currentState, errorOnLoginAction);

      expect(newState).toEqual(error);
    });
  });
  describe("When it is rendered with an errorOnRegisterAction", () => {
    test("Then it should return the error as the current state", () => {
      const currentState = {};
      const error = {
        error: true,
        message: "register error",
        code: 404,
      };
      const errorOnRegisterAction = {
        type: errorTypes.register,
        error,
      };

      const newState = errorReducer(currentState, errorOnRegisterAction);

      expect(newState).toEqual(error);
    });
  });
});
