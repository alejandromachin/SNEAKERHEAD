import { Action } from "../../../Types/Action";
import { User } from "../../../Types/User";
import actionTypes from "../actionTypes";

interface LoginAction extends Action {
  user: User;
}
export const loginAction = (user: User): LoginAction => ({
  type: actionTypes.login,
  user,
});
