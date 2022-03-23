import {
  loadSneakerInfoAction,
  loadSneakersAction,
  loadSpinnerSneakersAction,
} from "./sneakersActionCreator";
import actionTypes from "../actionTypes";

describe("Given a loadSneakersAction function", () => {
  describe("When it is called with an array of sneakers", () => {
    test("Then it should return an object with the type and the array", () => {
      const sneakers = [
        {
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
          ads: [],
        },
      ];
      const expectedAction = {
        type: actionTypes.loadSneakers,
        sneakers,
      };

      const action = loadSneakersAction(sneakers);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a loadSneakerInfoAction function", () => {
  describe("When it is called with a sneaker", () => {
    test("Then it should return an object with the type and the sneaker", () => {
      const sneaker = {
        id: "123",
        brand: "Jordan",
        style: "1",
        colorway: "Chicago",
        releaseDate: "april 1990",
        image: "image",
        averagePrice: "5.000€",
        ads: [],
      };
      const expectedAction = {
        type: actionTypes.loadSneakerInfo,
        sneaker,
      };

      const action = loadSneakerInfoAction(sneaker);

      expect(action).toEqual(expectedAction);
    });
  });
});
describe("Given a loadSpinnerAdsAction function", () => {
  describe("When it is called with an array of ads", () => {
    test("Then it should return an object with the type and the ads", () => {
      const sneakers = [
        {
          id: "123",
          brand: "Jordan",
          style: "1",
          colorway: "Chicago",
          releaseDate: "april 1990",
          image: "image",
          averagePrice: "5.000€",
          ads: [],
        },
      ];
      const expectedAction = {
        type: actionTypes.loadSpinnerSneakers,
        sneakers,
      };

      const action = loadSpinnerSneakersAction(sneakers);

      expect(action).toEqual(expectedAction);
    });
  });
});
