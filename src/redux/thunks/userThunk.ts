import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "react";
import { LoadUserAdsAction, LoginAction } from "../../Types/Action";
import { LoginData } from "../../Types/LoginData";
import { User } from "../../Types/User";
import {
  loadUserAdsAction,
  loginAction,
} from "../actions/usersActionCreator/usersActionCreator";

export const registerThunk = (userData: User) => async () => {
  const url = `${process.env.REACT_APP_URL}user/register`;

  await axios.post(url, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginThunk =
  (userData: LoginData) => async (dispatch: Dispatch<LoginAction>) => {
    const url = `${process.env.REACT_APP_URL}user/login`;

    const {
      data: { token },
    } = await axios.post(url, userData);

    localStorage.setItem("tokenKey", token);
    const userInfo: User = jwtDecode(token);
    dispatch(loginAction(userInfo));
  };

export const userAdsThunk =
  (userId: string) => async (dispatch: Dispatch<LoadUserAdsAction>) => {
    const url = `${process.env.REACT_APP_URL}user/ads/${userId}`;

    const { data } = await axios.get(url);

    dispatch(loadUserAdsAction(data));
  };
