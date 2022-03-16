import { LoginAction, RegisterAction } from "../../../Types/Action";
import { LoginData } from "../../../Types/LoginData";
import { User } from "../../../Types/User";
import actionTypes from "../actionTypes";

export const loginAction = (login: LoginData): LoginAction => ({
  type: actionTypes.login,
  login,
});

export const registerAction = (user: User): RegisterAction => ({
  type: actionTypes.register,
  user,
});
