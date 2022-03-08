import {
  loadSneakerInfoAction,
  loadSneakersAction,
} from "./sneakersActionCreator";
import actionTypes from "../actionTypes";

describe("Given a loadSneakersAction function", () => {
  describe("When it is called with an array of sneakers", () => {
    test("Then it should return an object with the type and the array", () => {
      const sneakers = [
        {
          Brand: "Jordan",
          Model: "1",
          Colorway: "Chicago",
          releaseDate: "april 1990",
          Image: "image",
          AveragePrice: "5.000€",
          Adds: "adds",
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
        Brand: "Jordan",
        Model: "1",
        Colorway: "Chicago",
        releaseDate: "april 1990",
        Image: "image",
        AveragePrice: "5.000€",
        Adds: "adds",
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
