import { Action, SizeFilterActionType } from "../../../Types/Action";
import actionTypes from "../../actions/actionTypes";

const filterReducer = (currentFilter: number[] = [], action: Action = {}) => {
  let newFilter: number[] | [];
  switch (action.type) {
    case actionTypes.filterBySize:
      newFilter = [...currentFilter, (action as SizeFilterActionType).size];
      break;
    case actionTypes.clearFilters:
      newFilter = [];
      break;
    default:
      newFilter = [...currentFilter];
      break;
  }
  return newFilter;
};

export default filterReducer;
