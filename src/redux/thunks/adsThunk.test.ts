import {
  createAdThunk,
  deleteAdThunk,
  editAdThunk,
  loadAllSneakerAdsThunk,
  moreInfoAdThunk,
} from "./adsThunks";

describe("Given a loadAllSneakerAdsThunk inner function", () => {
  describe("When it is called with an id", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const ad = { id: "test" };
      const thunkFunction = loadAllSneakerAdsThunk(ad.id);

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
});
