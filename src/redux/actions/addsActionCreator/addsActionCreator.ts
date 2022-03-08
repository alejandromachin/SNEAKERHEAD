import { Action } from "../../../Types/Action";
import { Add } from "../../../Types/Add";
import actionTypes from "../actionTypes";

interface CreateAddAction extends Action {
  add: Add;
}

export const createAddAction = (add: Add): CreateAddAction => ({
  type: actionTypes.createAdd,
  add,
});
