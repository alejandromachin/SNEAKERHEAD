import { combineReducers } from "redux";
import adsReducer from "./adsReducer/adsReducer";
import sneakerReducer from "./sneaker/sneakerReducer";
import sneakersReducer from "./sneakers/sneakersReducer";

const rootReducer = combineReducers({
  sneakers: sneakersReducer,
  sneaker: sneakerReducer,
  ads: adsReducer,
});

export default rootReducer;
