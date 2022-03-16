import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginData } from "../../Types/LoginData";
import { AdFormContainer } from "../AdForm/AdFormStyles";

const LoginForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    city: "",
    ads: [],
  };
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState<LoginData>(blankFields);

  const resetForm = () => {
    setLoginData(blankFields);
  };

  const registerUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginThunk(loginData));
    resetForm();
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <AdFormContainer>
      <form onSubmit={registerUser} noValidate autoComplete="off">
        <label htmlFor="username">Name: </label>
        <input
          type="text"
          id="username"
          onChange={changeData}
          value={loginData.username}
          required
        />
        <label htmlFor="password">Lastname: </label>
        <input
          type="password"
          id="password"
          onChange={changeData}
          value={loginData.password}
          required
        />

        <button type="submit">LOG IN</button>
      </form>
    </AdFormContainer>
  );
};
export default LoginForm;
