import { Action, AdAction, DeleteAdAction } from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import actionTypes from "../../actions/actionTypes";

const adsReducer = (currentState: Ad[] = [], action: Action = {}): Ad[] => {
  let newAds;
  switch (action.type) {
    case actionTypes.deleteAd:
      newAds = currentState.filter(
        (ad: Ad) => ad.id !== (action as DeleteAdAction).id
      );
      break;
    case actionTypes.editAd:
      newAds = currentState.map((ad: Ad) => {
        if (ad.id === (action as AdAction).ad.id) {
          return {
            ...(action as AdAction).ad,
          };
        }
        return { ...ad };
      });
      break;
    case actionTypes.createAd:
      newAds = [...currentState, (action as AdAction).ad];
      break;
    default:
      newAds = [...currentState];
      break;
  }
  return newAds;
};

export default adsReducer;
