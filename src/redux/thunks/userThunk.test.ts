import { registerThunk } from "./userThunk";

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
