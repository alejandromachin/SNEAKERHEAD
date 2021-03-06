import { AdAction, LoadAdsAction } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";
import adsReducer from "./adsReducer";

describe("Given an adsReducer function", () => {
  describe("When it is called with an empty state and a loadAds action with some ads", () => {
    test("then it should return the ads as the new state", () => {
      const currentState: Ad[] = [];
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
      const action = {
        type: actionTypes.loadAds,
        ads,
      };
      const newState = adsReducer(currentState, action);

      expect(newState).toEqual(ads);
    });
  });
  describe("When it is called with an state of one ad and a deleteAd action with the id of the ad", () => {
    test("then it should return the new state without the ad", () => {
      const currentState: Ad[] = [
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

      const action = {
        type: actionTypes.deleteAd,
        id: "test",
      };
      const newState = adsReducer(currentState, action);

      expect(newState).toHaveLength(0);
    });
  });
  describe("When it is called with an state of one ad an no action", () => {
    test("then it should return the same state", () => {
      const currentState: Ad[] = [
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

      const newState = adsReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });

  describe("When it is called with an state of two ads and a createAd action with a new ad", () => {
    test("then it should return the new state with 3 ads", () => {
      const currentState: Ad[] = [
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

      const newAd: Ad = {
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

      const action: AdAction = {
        type: actionTypes.createAd,
        ad: newAd,
      };

      const newState = adsReducer(currentState, action);

      expect(newState).toHaveLength(3);
    });
  });
  describe("When it is called with a state of an array of one ad and a filterAdsBySize action with two ads", () => {
    test("then it should return the ads as the new state", () => {
      const currentState: Ad[] = [
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
      const filteredAds: Ad[] = [
        {
          id: "test1",
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
        {
          id: "test2",
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
      const action: LoadAdsAction = {
        type: actionTypes.filterAdsBySize,
        ads: filteredAds,
      };
      const newState = adsReducer(currentState, action);

      expect(newState).toEqual(filteredAds);
    });
  });
  describe("When it is called with an empty state and a loadHotDealsAction with two ads", () => {
    test("then it should return the ads as the new state", () => {
      const currentState: Ad[] = [];
      const hotDealsAds: Ad[] = [
        {
          id: "test1",
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
        {
          id: "test2",
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
      const action: LoadAdsAction = {
        type: actionTypes.hotdeals,
        ads: hotDealsAds,
      };
      const newState = adsReducer(currentState, action);

      expect(newState).toEqual(hotDealsAds);
    });
  });
});
