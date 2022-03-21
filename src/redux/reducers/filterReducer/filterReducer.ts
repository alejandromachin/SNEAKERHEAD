import { Action, sizeFilterActionType } from "../../../Types/Action";
import actionTypes from "../../actions/actionTypes";

const filterReducer = (currentFilter: number[] = [], action: Action = {}) => {
  let newFilter: number[] | [];
  switch (action.type) {
    case actionTypes.filterBySize:
      newFilter = [...currentFilter, (action as sizeFilterActionType).size];
      break;

    default:
      newFilter = [...currentFilter];
      break;
  }
  return newFilter;
};

export default filterReducer;
