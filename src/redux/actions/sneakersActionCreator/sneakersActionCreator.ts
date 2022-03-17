import {
  Action,
  LoadSneakerInfoAction,
  LoadSneakersAction,
} from "../../../Types/Action";
import { Sneaker } from "../../../Types/Sneaker";
import actionTypes from "../actionTypes";

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

export const cleanUpSneakerAction = (): Action => ({
  type: actionTypes.cleanUpSneaker,
});
