import { LoginAction } from "../../../Types/Action";
import { LoginData } from "../../../Types/LoginData";
import actionTypes from "../../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer function", () => {
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

      expect(newState).toEqual(currentState);
    });
  });
});
