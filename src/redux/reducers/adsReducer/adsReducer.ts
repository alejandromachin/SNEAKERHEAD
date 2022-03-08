import { Action } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";

const adsReducer = (currentState: Ad[] = [], action: Action = {}) => {
  let newAds;
  switch (action.type) {
    case actionTypes.loadAds:
      if (action.ads) {
        return (newAds = [...action.ads]);
      }
      break;
    default:
      newAds = [...currentState];
      break;
  }
  return newAds;
};

export default adsReducer;
