import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "react";
import toast from "react-hot-toast";
import { LoadUserAdsAction, LoginAction } from "../../Types/Action";
import { ErrorAction } from "../../Types/Error";
import { LoginData } from "../../Types/LoginData";
import { User } from "../../Types/User";
import { errorOnLoginAction } from "../actions/errorsActionCreator/errorActionCreator";
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
  (userData: LoginData) =>
  async (dispatch: Dispatch<LoginAction> | Dispatch<ErrorAction>) => {
    const url = `${process.env.REACT_APP_URL}user/login`;

    await axios
      .post(url, userData)
      .then((response) => {
        localStorage.setItem(
          "tokenKey",
          (response as AxiosResponse).data.token
        );
        const userInfo: User = jwtDecode(
          (response as AxiosResponse).data.token
        );
        (dispatch as Dispatch<LoginAction>)(loginAction(userInfo));
      })
      .catch((error) => {
        (dispatch as Dispatch<ErrorAction>)(
          errorOnLoginAction(error.response.data)
        );
        toast.error("This didn't work.");
      });
  };

export const userAdsThunk =
  (userId: string) => async (dispatch: Dispatch<LoadUserAdsAction>) => {
    const url = `${process.env.REACT_APP_URL}user/ads/${userId}`;

    const { data } = await axios.get(url);

    dispatch(loadUserAdsAction(data));
  };
