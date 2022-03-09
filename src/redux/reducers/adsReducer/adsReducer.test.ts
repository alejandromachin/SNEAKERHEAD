import { Action } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";
import adsReducer from "./adsReducer";

describe("Given an adsReducer function", () => {
  describe("When it is called with an empty state and a loadAds action with some ads", () => {
    test("then it should return the ads as the new state", () => {
      const currentState: Ad[] = [];
      const ads = [
        {
          id: "test",
          Brand: "test",
          Model: "test",
          Colorway: "test",
          Images: ["test"],
          Price: "test",
          Likes: 0,
        },
        {
          id: "test",
          Brand: "test",
          Model: "test",
          Colorway: "test",
          Images: ["test"],
          Price: "test",
          Likes: 0,
        },
      ];
      const action: Action = {
        type: actionTypes.loadAds,
        ads,
      };
      const newState = adsReducer(currentState, action);

      expect(newState).toEqual(ads);
    });
  });
  describe("When it is called with an empty state and a loadAd action with an ad", () => {
    test("then it should return the ad as the new state", () => {
      const currentState: Ad[] = [];
      const ad: Ad = {
        id: "test",
        Brand: "test",
        Model: "test",
        Colorway: "test",
        Images: ["test"],
        Price: "test",
        Likes: 0,
      };

      const action: Action = {
        type: actionTypes.loadAd,
        ad,
      };
      const newState = adsReducer(currentState, action);

      expect(newState).toEqual(ad);
    });
  });
  describe("When it is called with an state of one ad and a deleteAd action with the id of the ad", () => {
    test("then it should return the new state without the ad", () => {
      const currentState: Ad[] = [
        {
          id: "test",
          Brand: "test",
          Model: "test",
          Colorway: "test",
          Images: ["test"],
          Price: "test",
          Likes: 0,
        },
      ];

      const action: Action = {
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
          Brand: "test",
          Model: "test",
          Colorway: "test",
          Images: ["test"],
          Price: "test",
          Likes: 0,
        },
      ];

      const newState = adsReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
});
