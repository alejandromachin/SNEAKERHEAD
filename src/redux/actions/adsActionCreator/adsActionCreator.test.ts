import actionTypes from "../actionTypes";
import {
  createAdAction,
  deleteAdAction,
  editAdAction,
  filterAdsBySizeAction,
  loadAdsAction,
} from "./adsActionCreator";

describe("Given a createAdAction function", () => {
  describe("When it is called with an ad", () => {
    test("Then it should return an object with the type and the ad", () => {
      const ad = {
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
      };
      const expectedAction = {
        type: actionTypes.createAd,
        ad,
      };

      const action = createAdAction(ad);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a editAdAction function", () => {
  describe("When it is called with an ad", () => {
    test("Then it should return an object with the type and the ad", () => {
      const ad = {
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
      };
      const expectedAction = {
        type: actionTypes.editAd,
        ad,
      };

      const action = editAdAction(ad);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a deleteAdAction function", () => {
  describe("When it is called with an ad id", () => {
    test("Then it should return an object with the type and the id", () => {
      const ad = {
        id: "test",
        brand: "test",
        style: "test",
        colorway: "test",
        images: ["test"],
        price: "test",
        likes: 0,
        size: 40,
        condition: 10,
      };
      const expectedAction = {
        type: actionTypes.deleteAd,
        id: ad.id,
      };

      const action = deleteAdAction(ad.id);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a loadAdAction function", () => {
  describe("When it is called with an array of ads", () => {
    test("Then it should return an object with the type and the ads", () => {
      const ads = [
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
        },
      ];
      const expectedAction = {
        type: actionTypes.loadAds,
        ads,
      };

      const action = loadAdsAction(ads);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a filterAdsBySizeAction function", () => {
  describe("When it is called with an array of ads", () => {
    test("Then it should return an object with the type and the ads", () => {
      const ads = [
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
        },
      ];
      const expectedAction = {
        type: actionTypes.filterAdsBySize,
        ads,
      };

      const action = filterAdsBySizeAction(ads);

      expect(action).toEqual(expectedAction);
    });
  });
});
