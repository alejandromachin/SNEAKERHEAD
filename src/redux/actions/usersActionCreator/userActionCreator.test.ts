import { LoginAction, RegisterAction } from "../../../Types/Action";
import { LoginData } from "../../../Types/LoginData";
import { RegisterData } from "../../../Types/RegisterData";
import actionTypes from "../actionTypes";
import { loginAction, registerAction } from "./usersActionCreator";

describe("Given a loginAction function", () => {
  describe("When it is called with a user", () => {
    test("Then it should return an object with the type and the user", () => {
      const userData: LoginData = {
        username: "machinazo",
        password: "1234",
      };

      const expectedAction: LoginAction = {
        type: actionTypes.login,
        login: userData,
      };

      const action = loginAction(userData);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a registerAction function", () => {
  describe("When it is called with a user", () => {
    test("Then it should return an object with the type and the user", () => {
      const user: RegisterData = {
        name: "test",
        lastname: "test",
        username: "test",
        password: "test",
        city: "test",
        email: "test",
      };
      const expectedAction: RegisterAction = {
        type: actionTypes.register,
        registerData: user,
      };

      const action = registerAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
