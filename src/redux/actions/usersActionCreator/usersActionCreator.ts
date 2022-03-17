import {
  Action,
  LoadUserAdsAction,
  LoginAction,
  RegisterAction,
} from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import { LoginData } from "../../../Types/LoginData";
import { User } from "../../../Types/User";
import actionTypes from "../actionTypes";

export const loginAction = (login: LoginData): LoginAction => ({
  type: actionTypes.login,
  login,
});
export const logOutAction = (): Action => ({
  type: actionTypes.logout,
});

export const registerAction = (user: User): RegisterAction => ({
  type: actionTypes.register,
  user,
});

export const loadUserAdsAction = (ads: Ad[]): LoadUserAdsAction => ({
  type: actionTypes.loadUserAds,
  ads,
});
