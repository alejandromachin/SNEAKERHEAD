import {
  Action,
  AdAction,
  DeleteAdAction,
  LoadAdsAction,
} from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";

const adsReducer = (currentState: Ad[] = [], action: Action = {}): Ad[] => {
  let newAds: Ad[];
  switch (action.type) {
    case actionTypes.loadAds:
      newAds = [...(action as LoadAdsAction).ads];
      break;

    case actionTypes.deleteAd:
      newAds = currentState.filter(
        (ad: Ad) => ad.id !== (action as DeleteAdAction).id
      );
      break;

    case actionTypes.createAd:
      newAds = [...currentState, (action as AdAction).ad];
      break;

    case actionTypes.filterAdsBySize:
      newAds = [...(action as LoadAdsAction).ads];
      break;

    case actionTypes.cleanUpAds:
      newAds = [];
      break;

    default:
      newAds = [...currentState];
      break;
  }
  return newAds;
};

export default adsReducer;
