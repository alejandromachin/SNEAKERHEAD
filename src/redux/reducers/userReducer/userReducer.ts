import { Action, RegisterAndLoginAction } from "../../../Types/Action";
import { User } from "../../../Types/User";
import actionTypes from "../../actions/actionTypes";

const loginReducer = (
  currentUser: User | {} = {},
  action: Action | RegisterAndLoginAction = {}
) => {
  let newUser;
  switch (action.type) {
    case actionTypes.login:
      newUser = { ...(action as RegisterAndLoginAction).user };
      break;
    default:
      newUser = { ...currentUser };
  }
  return newUser;
};

export default loginReducer;
