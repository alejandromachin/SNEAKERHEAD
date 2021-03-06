import { Ad } from "../../../Types/Ad";
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
        ownerEmail: "test@email.com",
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
      const ad: Ad = {
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
        ownerEmail: "test@email.com",
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
      const ad: Ad = {
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
        box: "good",
        state: "new",
        condition: 10,
        owner: "622b15710695a90af3e56a20",
        ownerEmail: "test@email.com",
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
      const ads: Ad[] = [
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
          ownerEmail: "test@email.com",
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
      const ads: Ad[] = [
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
          ownerEmail: "test@email.com",
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
