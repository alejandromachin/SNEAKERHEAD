import { Action, LoginAction, RegisterAction } from "../../../Types/Action";
import { LoginData } from "../../../Types/LoginData";
import actionTypes from "../../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState = {};

      const newState = userReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is called with an empty state and a loginAction with an user data", () => {
    test("Then it should return the user data as the new state", () => {
      const currentState = {};

      const userData: LoginData = {
        username: "machinazo",
        password: "1234",
      };
      const action: LoginAction = {
        type: actionTypes.login,
        login: userData,
      };

      const newState = userReducer(currentState, action);

      expect(newState).toEqual(userData);
    });
  });
  describe("When it is called  with a logOutAction", () => {
    test("Then it should return an empty state as new state", () => {
      const currentState = { user: "test" };
      const expectedNewState = {};
      const logOutAction: Action = {
        type: actionTypes.logout,
      };

      const newState = userReducer(currentState, logOutAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
  describe("When it is called  with a registerAction", () => {
    test("Then it should return the register data as new state", () => {
      const currentState = {};
      const registerData = {
        name: "test",
        lastname: "test",
        username: "test",
        password: "test",
        email: "test",
        city: "test",
      };
      const registerAction: RegisterAction = {
        type: actionTypes.register,
        registerData,
      };

      const newState = userReducer(currentState, registerAction);

      expect(newState).toEqual(registerData);
    });
  });
});
