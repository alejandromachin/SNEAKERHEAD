import { Action, LoadSneakersAction } from "../../../Types/Action";
import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../../actions/actionTypes";

const sneakersReducer = (
  currentState: Sneaker[] | [] = [],
  action: Action = {}
) => {
  let newSneakers: Sneaker[];
  switch (action.type) {
    case actionTypes.loadSneakers:
      if ((action as LoadSneakersAction).sneakers) {
        newSneakers = [...(action as LoadSneakersAction).sneakers];
      } else {
        newSneakers = [...currentState];
      }
      break;
    default:
      newSneakers = [...currentState];
      break;
  }
  return newSneakers;
};

export default sneakersReducer;
