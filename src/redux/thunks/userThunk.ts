import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "react";
import toast from "react-hot-toast";
import {
  LoadUserAdsAction,
  LoginAction,
  RegisterAction,
} from "../../Types/Action";
import { ErrorAction } from "../../Types/Error";
import { LoginData } from "../../Types/LoginData";
import { RegisterData } from "../../Types/RegisterData";
import { User } from "../../Types/User";
import {
  errorOnLoginAction,
  errorOnRegisterAction,
} from "../actions/errorsActionCreator/errorActionCreator";
import {
  loadUserAdsAction,
  loginAction,
  registerAction,
} from "../actions/usersActionCreator/usersActionCreator";

export const registerThunk =
  (userData: RegisterData) =>
  async (dispatch: Dispatch<ErrorAction> | Dispatch<RegisterAction>) => {
    const url = `${process.env.REACT_APP_URL}user/register`;

    await axios
      .post(url, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        (dispatch as Dispatch<RegisterAction>)(registerAction(userData));
      })
      .catch((error) => {
        (dispatch as Dispatch<ErrorAction>)(
          errorOnRegisterAction(error.response.data)
        );
        toast.error(`${error.response.data.message}`, {
          duration: 1000,
          style: {
            position: "relative",
            top: 580,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      });
  };

export const loginThunk =
  (userData: LoginData) =>
  async (dispatch: Dispatch<LoginAction> | Dispatch<ErrorAction>) => {
    const url = `${process.env.REACT_APP_URL}user/login`;

    await axios
      .post(url, userData)
      .then((response) => {
        localStorage.setItem("tokenKey", response.data.token);
        const userInfo: User = jwtDecode(response.data.token);
        (dispatch as Dispatch<LoginAction>)(loginAction(userInfo));
      })
      .catch((error) => {
        (dispatch as Dispatch<ErrorAction>)(
          errorOnLoginAction(error.response.data)
        );
        toast.error(`${error.response.data.message}`, {
          duration: 1000,
          style: {
            position: "relative",
            top: 330,
            color: "#ff0000",
            backgroundColor: "#d3e2ff",
          },
        });
      });
  };

export const userAdsThunk =
  (userId: string) => async (dispatch: Dispatch<LoadUserAdsAction>) => {
    const url = `${process.env.REACT_APP_URL}user/ads/${userId}`;

    const { data } = await axios.get(url);

    dispatch(loadUserAdsAction(data));
  };
