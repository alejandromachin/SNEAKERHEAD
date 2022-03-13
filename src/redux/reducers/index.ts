import { combineReducers } from "redux";
import adReducer from "./adReducer/adReducer";
import adsReducer from "./adsReducer/adsReducer";
import sneakerReducer from "./sneaker/sneakerReducer";
import sneakersReducer from "./sneakers/sneakersReducer";

const rootReducer = combineReducers({
  sneakers: sneakersReducer,
  sneaker: sneakerReducer,
  ads: adsReducer,
  ad: adReducer,
});

export default rootReducer;
