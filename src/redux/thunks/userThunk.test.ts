import { loginThunk, registerThunk } from "./userThunk";

jest.mock("jwt-decode", () => () => ({
  name: "Alejandro",
  lastname: "Rodriguez Machin",
  username: "machinazo",
  email: "a.rodriguezmachin@gmail.com",
  id: "623359fc14fef71610125a52",
}));

describe("Given a registerThunk inner function", () => {
  describe("When it is called with the data of an user", () => {
    test("Then it should send a request to the url", async () => {
      const userData = {
        id: "",
        name: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        city: "",
        ads: [],
      };

      await registerThunk(userData);
    });
  });
});

describe("Given a loginThunk inner function", () => {
  describe("When it is called with the loginData", () => {
    test("Then it should call the setItem method of the localstorge", async () => {
      const userData = {
        username: "machinazo",
        password: "1234",
      };
      const dispatch = jest.fn();
      const thunkFunction = loginThunk(userData);

      await thunkFunction(dispatch);
    });
  });
});
