import { loadAllSneakerAdsThunk, moreInfoAdThunk } from "./adsThunks";

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
