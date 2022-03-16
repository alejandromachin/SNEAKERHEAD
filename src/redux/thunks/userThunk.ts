import axios from "axios";
import { User } from "../../Types/User";

export const registerThunk = (userData: User) => async () => {
  const url = `${process.env.REACT_APP_URL}user/register`;

  await axios.post(url, userData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
