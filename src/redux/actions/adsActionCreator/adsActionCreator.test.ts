import actionTypes from "../actionTypes";
import { createAdAction } from "./adsActionCreator";

describe("Given a createAdAction function", () => {
  describe("When it is called with an ad", () => {
    test("Then it should return an object with the type and the ad", () => {
      const ad = {
        Brand: "test",
        Model: "test",
        Colorway: "test",
        Images: ["test"],
        Price: "test",
        Likes: 1,
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
