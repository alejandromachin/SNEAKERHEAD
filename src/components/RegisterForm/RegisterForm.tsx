import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/userThunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLookup, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { RegisterFormContainer } from "./RegisterFormStyles";

library.add(fas);

const eyeLookup: IconLookup = {
  prefix: "fas",
  iconName: "eye",
};

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    city: "",
  };

  const dispatch = useDispatch();
  const [userData, setUserData] = useState(blankFields);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const resetForm = () => {
    setUserData(blankFields);
  };

  useEffect(() => {
    if (
      userData.name !== "" &&
      userData.lastname !== "" &&
      userData.username !== "" &&
      userData.password !== "" &&
      userData.email !== "" &&
      userData.city !== ""
    ) {
      setDisableButton(false);
    }
  }, [userData]);

  const registerUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(registerThunk(userData));
    resetForm();
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  const showPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <RegisterFormContainer>
      <form onSubmit={registerUser} noValidate autoComplete="off">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={changeData}
          value={userData.name}
          required
        />
        <label htmlFor="lastname">Lastname: </label>
        <input
          type="text"
          id="lastname"
          onChange={changeData}
          value={userData.lastname}
          required
        />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={changeData}
          value={userData.username}
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          onChange={changeData}
          value={userData.password}
          required
        />

        <FontAwesomeIcon
          className={
            passwordVisible
              ? "registerForm__eyeIcon active"
              : "registerForm__eyeIcon"
          }
          icon={eyeLookup}
          onClick={showPassword}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          onChange={changeData}
          value={userData.email}
          required
        />
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          onChange={changeData}
          value={userData.city}
          required
        />
        <button
          type="submit"
          className={disableButton ? "AdForm_Button__disabled" : ""}
          disabled={disableButton ? true : false}
        >
          {disableButton ? "FILL ALL THE INFO" : "REGISTER"}
        </button>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
