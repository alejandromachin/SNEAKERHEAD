import { RegisterAndLoginAction } from "../../../Types/Action";
import { User } from "../../../Types/User";
import actionTypes from "../actionTypes";

export const loginAction = (user: User): RegisterAndLoginAction => ({
  type: actionTypes.login,
  user,
});

export const registerAction = (user: User): RegisterAndLoginAction => ({
  type: actionTypes.register,
  user,
});
