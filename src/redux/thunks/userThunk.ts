import axios from "axios";
import jwtDecode from "jwt-decode";
import { LoginData } from "../../Types/LoginData";
import { User } from "../../Types/User";

export const registerThunk = (userData: User) => async () => {
  const url = `${process.env.REACT_APP_URL}user/register`;

  await axios.post(url, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const loginThunk = (userData: LoginData) => async () => {
  const url = `${process.env.REACT_APP_URL}user/login`;

  const {
    data: { token },
  } = await axios.post(url, userData);

  const userInfo = jwtDecode(token);

  localStorage.setItem("tokenKey", token);
};
