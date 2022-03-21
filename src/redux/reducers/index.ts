import { combineReducers } from "redux";
import adReducer from "./adReducer/adReducer";
import adsReducer from "./adsReducer/adsReducer";
import errorReducer from "./errorReducer/errorReducer";
import filterReducer from "./filterReducer/filterReducer";
import menuReducer from "./menuReducer/menuReducer";
import searchReducer from "./searchReducer/searchReducer";
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
  error: errorReducer,
  menuState: menuReducer,
  params: searchReducer,
  filter: filterReducer,
});

export default rootReducer;
