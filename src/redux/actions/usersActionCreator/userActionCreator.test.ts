import { User } from "../../../Types/User";
import actionTypes from "../actionTypes";
import { loginAction, registerAction } from "./usersActionCreator";

describe("Given a loginAction function", () => {
  describe("When it is called with a user", () => {
    test("Then it should return an object with the type and the user", () => {
      const user: User = {
        name: "test",
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
            images: ["test"],
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
      const user: User = {
        name: "test",
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
            images: ["test"],
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
