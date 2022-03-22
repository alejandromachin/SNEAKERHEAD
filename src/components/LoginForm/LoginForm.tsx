import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/userThunk";
import { LoginData } from "../../Types/LoginData";
import { LoginFormContainer } from "./LoginFormStyles";

const LoginForm = (): JSX.Element => {
  const blankFields = {
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState<LoginData>(blankFields);
  const [disableButton, setDisableButton] = useState<boolean>(true);

  useEffect(() => {
    if (loginData.username !== "" && loginData.password !== "") {
      setDisableButton(false);
    }
  }, [loginData]);

  const resetForm = () => {
    setLoginData(blankFields);
  };

  const loginUser = (event: React.FormEvent<HTMLFormElement>) => {
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
    <LoginFormContainer>
      <form onSubmit={loginUser} noValidate autoComplete="off">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={changeData}
          value={loginData.username}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={changeData}
          value={loginData.password}
          required
        />

        <button
          type="submit"
          className={disableButton ? "AdForm_Button__disabled" : ""}
          disabled={disableButton ? true : false}
        >
          LOG IN
        </button>
      </form>
    </LoginFormContainer>
  );
};
export default LoginForm;
