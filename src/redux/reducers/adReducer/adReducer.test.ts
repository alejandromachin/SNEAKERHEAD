import { AdAction } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";
import adReducer from "./adReducer";

describe("Given a adReducer function", () => {
  describe("When it is called with an empty state and a loadAd action with an ad", () => {
    test("then it should return the ad as the new state", () => {
      const currentState = {};
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
      };
      const action = {
        type: actionTypes.loadAd,
        ad,
      };
      const newState = adReducer(currentState, action);

      expect(newState).toEqual(ad);
    });
  });
  describe("When it is called without action or state", () => {
    test("Then it should return the same current state", () => {
      const currentState = {};

      const newState = adReducer(undefined, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is called with an state of one ad and a editAd action with the id of the ad", () => {
    test("then it should return the new state with the ad edited", () => {
      const currentState: Ad = {
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
      };

      const editedAd: Ad = {
        id: "test",
        brand: "modified",
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
      };

      const action: AdAction = {
        type: actionTypes.editAd,
        ad: editedAd,
      };

      const newState = adReducer(currentState, action);

      expect(newState).toHaveProperty("brand", "modified");
    });
  });
});
