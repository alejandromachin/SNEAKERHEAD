import { Action, LoadSneakersAction } from "../../../Types/Action";
import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../../actions/actionTypes";

const sneakersReducer = (
  currentState: Sneaker[] | [] = [],
  action: Action = {}
) => {
  let newSneakers: Sneaker[] | [];
  switch (action.type) {
    case actionTypes.loadSneakers:
      newSneakers = [...(action as LoadSneakersAction).sneakers];
      break;

    case actionTypes.loadSpinnerSneakers:
      newSneakers = [...(action as LoadSneakersAction).sneakers];
      break;

    case actionTypes.cleanUpSneakers:
      newSneakers = [];
      break;

    default:
      newSneakers = [...currentState];
      break;
  }
  return newSneakers;
};

export default sneakersReducer;
