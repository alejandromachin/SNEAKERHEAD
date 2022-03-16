import { LoginAction } from "../../../Types/Action";
import { LoginData } from "../../../Types/LoginData";
import { User } from "../../../Types/User";
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
      const user: User = {
        id: "test",
        name: "test",
        lastname: "test",
        username: "test",
        password: "test",
        city: "test",
        email: "test",
        ads: [
          {
            id: "test",
            brand: "test",
            style: "test",
            colorway: "test",
            image1: "test",
            image2: "test",
            image3: "test",
            image4: "test",
            price: "test",
            likes: 0,
            size: 40,
            condition: 10,
            box: "good",
            state: "new",
            owner: "622b15710695a90af3e56a20",
          },
        ],
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
