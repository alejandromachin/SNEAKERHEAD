import { Action, LoadUserAdsAction } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";

const userAdsReducer = (
  currentUser: Ad[] = [],
  action: Action | LoadUserAdsAction = {}
) => {
  let newUserAds;
  switch (action.type) {
    case actionTypes.loadUserAds:
      newUserAds = [...(action as LoadUserAdsAction).ads];
      break;
    default:
      newUserAds = [...currentUser];
  }
  return newUserAds;
};

export default userAdsReducer;
