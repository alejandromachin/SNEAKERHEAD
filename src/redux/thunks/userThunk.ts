import axios from "axios";

export const registerThunk = (userData: FormData) => async () => {
  const url = `${process.env.REACT_APP_URL}user/register`;

  await axios.post(url, userData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
