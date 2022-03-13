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
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
        },
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
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
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
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
        },
      ];

      const newState = adsReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is called with an state of two ads and a editAd action with the id of the ad", () => {
    test("then it should return the new state with ad edited", () => {
      const currentState: Ad[] = [
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

      const editedAd: Ad = {
        id: "test",
        brand: "modified",
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

      const action: AdAction = {
        type: actionTypes.editAd,
        ad: editedAd,
      };

      const newState = adsReducer(currentState, action);

      expect((newState as Ad[])[0]).toHaveProperty("brand", "modified");
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
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
        },
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

      const newAd: Ad = {
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
          images: ["test"],
          price: "test",
          likes: 0,
          size: 40,
          condition: 10,
          box: "good",
          state: "new",
        },
      ];
      const filteredAds: Ad[] = [
        {
          id: "test1",
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
        {
          id: "test2",
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
      const action: LoadAdsAction = {
        type: actionTypes.filterAdsBySize,
        ads: filteredAds,
      };
      const newState = adsReducer(currentState, action);

      expect(newState).toEqual(filteredAds);
    });
  });
});
