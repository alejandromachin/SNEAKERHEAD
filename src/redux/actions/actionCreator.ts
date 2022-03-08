import { Action } from "../../Types/Action";
import { Sneaker } from "../../Types/Sneaker";
import actionTypes from "./actionTypes";

interface loadSneakers extends Action {
  sneakers: Sneaker[];
}
interface loadSneakerInfo extends Action {
  sneaker: Sneaker;
}

export const loadSneakersAction = (sneakers: Sneaker[]): loadSneakers => ({
  type: actionTypes.loadSneakers,
  sneakers,
});

export const loadSneakerInfoAction = (sneaker: Sneaker): loadSneakerInfo => ({
  type: actionTypes.loadSneakerInfo,
  sneaker,
});
