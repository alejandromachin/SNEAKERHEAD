import { combineReducers } from "redux";
import adsReducer from "./adsReducer/adsReducer";
import sneakersReducer from "./sneakers/sneakersReducer";

const rootReducer = combineReducers({
  sneakers: sneakersReducer,
  ads: adsReducer,
});

export default rootReducer;
