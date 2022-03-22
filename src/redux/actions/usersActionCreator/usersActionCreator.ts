import {
  Action,
  LoadUserAdsAction,
  LoginAction,
  RegisterAction,
} from "../../../Types/Action";
import { Ad } from "../../../Types/Ad";
import { LoginData } from "../../../Types/LoginData";
import { RegisterData } from "../../../Types/RegisterData";

import actionTypes from "../actionTypes";

export const loginAction = (login: LoginData): LoginAction => ({
  type: actionTypes.login,
  login,
});
export const logOutAction = (): Action => ({
  type: actionTypes.logout,
});

export const registerAction = (registerData: RegisterData): RegisterAction => ({
  type: actionTypes.register,
  registerData,
});

export const loadUserAdsAction = (ads: Ad[]): LoadUserAdsAction => ({
  type: actionTypes.loadUserAds,
  ads,
});
