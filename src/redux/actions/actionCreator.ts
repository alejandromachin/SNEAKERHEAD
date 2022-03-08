import { Action } from "../../Types/Action";
import { Sneaker } from "../../Types/Sneaker";
import actionTypes from "./actionTypes";

interface loadSneakers extends Action {
  sneakers: Sneaker[];
}
export const loadSneakersAction = (sneakers: Sneaker[]): loadSneakers => ({
  type: actionTypes.loadSneakers,
  sneakers: sneakers,
});
