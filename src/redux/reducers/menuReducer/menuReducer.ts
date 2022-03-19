import { Action } from "../../../Types/Action";
import actionTypes from "../../actions/actionTypes";

const menuReducer = (
  currentMenuState: boolean = false,
  action: Action = {}
) => {
  let newMenuState;
  switch (action.type) {
    case actionTypes.menuState:
      newMenuState = !currentMenuState;
      break;

    default:
      newMenuState = currentMenuState;
  }
  return newMenuState;
};

export default menuReducer;
