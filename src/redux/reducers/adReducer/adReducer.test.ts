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
        images: ["test"],
        price: "test",
        likes: 0,
        size: 40,
        condition: "10/10",
      };
      const action = {
        type: actionTypes.loadAd,
        ad,
      };
      const newState = adReducer(currentState, action);

      expect(newState).toEqual(ad);
    });
  });
});
