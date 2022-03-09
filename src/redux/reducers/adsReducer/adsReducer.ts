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
    case actionTypes.loadAd:
      if (action.ad) {
        return (newAds = { ...action.ad });
      }
      break;
    case actionTypes.deleteAd:
      if (action.id) {
        return (newAds = currentState.filter((ad: Ad) => ad.id !== action.id));
      }
      break;
    case actionTypes.editAd:
      if (action.ad) {
        return (newAds = currentState.map((ad: Ad) => {
          if (ad.id === action.ad?.id) {
            return {
              ...action.ad,
            };
          }
          return { ...ad };
        }));
      }
      break;
    case actionTypes.createAd:
      if (action.ad) {
        return (newAds = [...currentState, action.ad]);
      }
      break;
    default:
      newAds = [...currentState];
      break;
  }
  return newAds;
};

export default adsReducer;
