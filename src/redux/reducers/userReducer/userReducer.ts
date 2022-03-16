import { Action, LoginAction } from "../../../Types/Action";
import { User } from "../../../Types/User";
import actionTypes from "../../actions/actionTypes";

const userReducer = (
  currentUser: User | {} = {},
  action: Action | LoginAction = {}
) => {
  let newUser;
  switch (action.type) {
    case actionTypes.login:
      newUser = { ...(action as LoginAction).login };
      break;
    default:
      newUser = { ...currentUser };
  }
  return newUser;
};

export default userReducer;
