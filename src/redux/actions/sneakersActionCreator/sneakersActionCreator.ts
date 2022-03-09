import { Action } from "../../../Types/Action";
import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../actionTypes";

interface LoadSneakersAction extends Action {
  sneakers: Sneaker[];
}
interface LoadSneakerInfoAction extends Action {
  sneaker: Sneaker;
}

export const loadSneakersAction = (
  sneakers: Sneaker[]
): LoadSneakersAction => ({
  type: actionTypes.loadSneakers,
  sneakers,
});

export const loadSneakerInfoAction = (
  sneaker: Sneaker
): LoadSneakerInfoAction => ({
  type: actionTypes.loadSneakerInfo,
  sneaker,
});
