import actionTypes from "../actionTypes";
import {
  createAdAction,
  deleteAdAction,
  editAdAction,
} from "./adsActionCreator";

describe("Given a createAdAction function", () => {
  describe("When it is called with an ad", () => {
    test("Then it should return an object with the type and the ad", () => {
      const ad = {
        id: "test",
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
describe("Given a editAdAction function", () => {
  describe("When it is called with an ad", () => {
    test("Then it should return an object with the type and the ad", () => {
      const ad = {
        id: "test",
        Brand: "test",
        Model: "test",
        Colorway: "test",
        Images: ["test"],
        Price: "test",
        Likes: 1,
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
        Brand: "test",
        Model: "test",
        Colorway: "test",
        Images: ["test"],
        Price: "test",
        Likes: 1,
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
