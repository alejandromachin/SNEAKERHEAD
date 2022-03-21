import { Action, SearchParamsActionType } from "../../../Types/Action";
import { Search } from "../../../Types/Search";
import actionTypes from "../../actions/actionTypes";

const searchReducer = (currentSearch: string = " ", action: Action = {}) => {
  let newSearch: Search | {};
  switch (action.type) {
    case actionTypes.searchParams:
      newSearch = (action as SearchParamsActionType).params;
      break;

    default:
      newSearch = currentSearch;
      break;
  }
  return newSearch;
};

export default searchReducer;
