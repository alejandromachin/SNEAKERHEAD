import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";
import userAdsReducer from "./userAdsReducer";

describe("Given an userAdsReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState: Ad[] = [];

      const newState = userAdsReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is rendered with LoadUserAdsAction", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState: Ad[] = [];

      const ads: Ad[] = [
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
        },
      ];

      const LoadUserAdsAction = {
        type: actionTypes.loadUserAds,
        ads,
      };

      const newState = userAdsReducer(currentState, LoadUserAdsAction);

      expect(newState).toEqual(ads);
    });
  });
});
