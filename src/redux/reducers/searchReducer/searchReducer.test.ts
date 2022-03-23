import { SearchParamsActionType } from "../../../Types/Action";
import actionTypes from "../../actions/actionTypes";
import searchReducer from "./searchReducer";

describe("Given an searchReducer function", () => {
  describe("When it is rendered with no action", () => {
    test("Then it should return the same state as the current state", () => {
      const currentState = "test";

      const newState = searchReducer(currentState, undefined);

      expect(newState).toEqual(currentState);
    });
  });
  describe("When it is rendered with searchParamsAction", () => {
    test("Then it should return the oposite state as the current state", () => {
      const currentState = "test";
      const params = "jordan";

      const searchParamsAction: SearchParamsActionType = {
        type: actionTypes.searchParams,
        params,
      };
      const newState = searchReducer(currentState, searchParamsAction);

      expect(newState).toBe(params);
    });
  });
});
