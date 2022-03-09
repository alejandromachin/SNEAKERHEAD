import {
  Action,
  LoadSneakerInfoAction,
  LoadSneakersAction,
} from "../../../Types/Action";
import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../../actions/actionTypes";

const sneakersReducer = (
  currentState: Sneaker[] | [] = [],
  action: Action = {}
) => {
  let newSneakers;

  switch (action.type) {
    case actionTypes.loadSneakers:
      if ((action as LoadSneakersAction).sneakers) {
        return (newSneakers = [...(action as LoadSneakersAction).sneakers]);
      }
      break;
    case actionTypes.loadSneakerInfo:
      if ((action as LoadSneakerInfoAction).sneaker) {
        return (newSneakers = { ...(action as LoadSneakerInfoAction).sneaker });
      }
      break;
    default:
      newSneakers = [...currentState];
      break;
  }
  return newSneakers;
};

export default sneakersReducer;
