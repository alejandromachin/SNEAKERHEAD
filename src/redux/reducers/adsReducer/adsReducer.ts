import {
  Action,
  AdAction,
  DeleteAdAction,
  LoadAdsAction,
} from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";

const adsReducer = (
  currentState: Ad[] = [],
  action: Action | AdAction | DeleteAdAction = {}
) => {
  let newAds;
  switch (action.type) {
    case actionTypes.loadAds:
      if ((action as LoadAdsAction).ads) {
        return (newAds = [...(action as LoadAdsAction).ads]);
      }
      break;
    case actionTypes.loadAd:
      if ((action as AdAction).ad) {
        return (newAds = { ...(action as AdAction).ad });
      }
      break;
    case actionTypes.deleteAd:
      if ((action as DeleteAdAction).id) {
        return (newAds = currentState.filter(
          (ad: Ad) => ad.id !== (action as DeleteAdAction).id
        ));
      }
      break;
    case actionTypes.editAd:
      if ((action as AdAction).ad) {
        return (newAds = currentState.map((ad: Ad) => {
          if (ad.id === (action as AdAction).ad.id) {
            return {
              ...(action as AdAction).ad,
            };
          }
          return { ...ad };
        }));
      }
      break;
    case actionTypes.createAd:
      if ((action as AdAction).ad) {
        return (newAds = [...currentState, (action as AdAction).ad]);
      }
      break;
    default:
      newAds = [...currentState];
      break;
  }
  return newAds;
};

export default adsReducer;
