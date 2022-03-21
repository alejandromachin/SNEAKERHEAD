import {
  createAdThunk,
  deleteAdThunk,
  editAdThunk,
  loadAllSneakerAdsThunk,
  loadHotDealsThunk,
  moreInfoAdThunk,
} from "./adsThunks";
import axios from "axios";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a createAdThunk inner function", () => {
  describe("When it is called with the data of an ad", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const adData = new FormData();

      const thunkFunction = createAdThunk(adData);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When it has an error on fetching", () => {
    test("Then it should call the dispatch function with the error action", async () => {
      jest.mock("axios");
      const error = { response: { data: "error" } };

      axios.post = jest.fn().mockRejectedValue(error);

      const dispatch = jest.fn();
      const adData = new FormData();

      const thunkFunction = createAdThunk(adData);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given a loadAllSneakerAdsThunk inner function", () => {
  describe("When it is called with an id", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const ad = { id: "test" };
      const limit = 2;
      const skip = 2;
      const thunkFunction = loadAllSneakerAdsThunk(ad.id, limit, skip);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
describe("Given a moreInfoAdThunk inner function", () => {
  describe("When it is called with an id", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const ad = { id: "test" };
      const thunkFunction = moreInfoAdThunk(ad.id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteAdThunk inner function", () => {
  describe("When it is called with an id", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const ad = { id: "test" };
      const thunkFunction = deleteAdThunk(ad.id);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When it has an error on fetching", () => {
    test("Then it should call the dispatch function with the error action", async () => {
      jest.mock("axios");
      const error = { response: { data: "error" } };

      axios.delete = jest.fn().mockRejectedValue(error);

      const dispatch = jest.fn();
      const ad = { id: "test" };
      const thunkFunction = deleteAdThunk(ad.id);

      await thunkFunction(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a editAdThunk inner function", () => {
  describe("When it is called with the data of an ad and the id of it", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const adData = new FormData();
      const adId = "test";

      const thunkFunction = editAdThunk(adData, adId);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When it has an error on fetching", () => {
    test("Then it should call the dispatch function with the error action", async () => {
      jest.mock("axios");
      const error = { response: { data: "error" } };

      axios.patch = jest.fn().mockRejectedValue(error);

      const dispatch = jest.fn();
      const adData = new FormData();
      const adId = "test";

      const thunkFunction = editAdThunk(adData, adId);

      await thunkFunction(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a loadHotDealsThunk function", () => {
  describe("When it is called with the data of an ad and the id of it", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();

      await loadHotDealsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
  describe("When it has an error on fetching", () => {
    test("Then it should call the dispatch function with the error action", async () => {
      jest.mock("axios");
      const error = { response: { data: "error" } };

      axios.get = jest.fn().mockRejectedValue(error);

      const dispatch = jest.fn();
      await loadHotDealsThunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
