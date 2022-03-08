import actionTypes from "../actionTypes";
import { loginAction, registerAction } from "./usersActionCreator";

describe("Given a loginAction function", () => {
  describe("When it is called with a user", () => {
    test("Then it should return an object with the type and the user", () => {
      const user = {
        name: "test",
        username: "test",
        password: "test",
        city: "test",
        email: "test",
      };
      const expectedAction = {
        type: actionTypes.login,
        user,
      };

      const action = loginAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a registerAction function", () => {
  describe("When it is called with a user", () => {
    test("Then it should return an object with the type and the user", () => {
      const user = {
        name: "test",
        username: "test",
        password: "test",
        city: "test",
        email: "test",
      };
      const expectedAction = {
        type: actionTypes.register,
        user,
      };

      const action = registerAction(user);

      expect(action).toEqual(expectedAction);
    });
  });
});
