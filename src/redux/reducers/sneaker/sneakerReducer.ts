import { Action, LoadSneakerInfoAction } from "../../../Types/Action";
import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../../actions/actionTypes";

const sneakerReducer = (
  currentState: Sneaker | {} = {},
  action: Action = {}
) => {
  let newSneaker: Sneaker | {};
  switch (action.type) {
    case actionTypes.loadSneakerInfo:
      newSneaker = { ...(action as LoadSneakerInfoAction).sneaker };
      break;
    case actionTypes.cleanUpSneaker:
      newSneaker = {};
      break;
    default:
      newSneaker = { ...currentState };
      break;
  }
  return newSneaker;
};

export default sneakerReducer;
