import { Action } from "../../../Types/Action";
import actionTypes from "../actionTypes";

export const changeMenuStateAction = (): Action => ({
  type: actionTypes.menuState,
});
