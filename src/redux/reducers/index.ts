import { combineReducers } from "redux";
import adReducer from "./adReducer/adReducer";
import adsReducer from "./adsReducer/adsReducer";
import sneakerReducer from "./sneaker/sneakerReducer";
import sneakersReducer from "./sneakers/sneakersReducer";
import userAdsReducer from "./userAdsReducer/userAdsReducer";
import userReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({
  sneakers: sneakersReducer,
  sneaker: sneakerReducer,
  ads: adsReducer,
  ad: adReducer,
  user: userReducer,
  userAds: userAdsReducer,
});

export default rootReducer;
