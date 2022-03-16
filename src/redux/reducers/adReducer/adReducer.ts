import { Action, AdAction } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";

const adReducer = (currentState: Ad | {} = {}, action: Action = {}) => {
  let newAd: Ad | {};
  switch (action.type) {
    case actionTypes.loadAd:
      newAd = { ...(action as AdAction).ad };
      break;
    case actionTypes.editAd:
      newAd = { ...(action as AdAction).ad };
      break;
    default:
      newAd = { ...currentState };
      break;
  }
  return newAd;
};

export default adReducer;
