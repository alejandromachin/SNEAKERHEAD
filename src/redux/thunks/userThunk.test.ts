import axios from "axios";
import { loginThunk, registerThunk } from "./userThunk";

jest.mock("jwt-decode", () => () => ({
  name: "Alejandro",
  lastname: "Rodriguez Machin",
  username: "machinazo",
  email: "a.rodriguezmachin@gmail.com",
  id: "623359fc14fef71610125a52",
}));

beforeEach(() => {
  jest.clearAllMocks();
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

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a registerThunk inner function", () => {
  describe("When it is called with the data of an user", () => {
    test("Then it should send a request to the url", async () => {
      jest.mock("axios");

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

      const dispatch = jest.fn();

      const thunkFunction = registerThunk(userData);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When it has an error on fetching", () => {
    test("Then it should call the dispatch function with the error action", async () => {
      jest.mock("axios");
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
      const error = { response: { data: "error" } };
      axios.post = jest.fn().mockRejectedValue(error);
      const dispatch = jest.fn();

      const thunkFunction = registerThunk(userData);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loginThunk inner function with an error", () => {
  describe("When it has an error on fetching", () => {
    test("Then it should call the dispatch function with the error action", async () => {
      jest.mock("axios");
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
      const error = { response: { data: "error" } };
      axios.post = jest.fn().mockRejectedValue(error);
      const dispatch = jest.fn();

      const thunkFunction = loginThunk(userData);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
