import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/userThunk";
import { User } from "../../Types/User";
import { AdFormContainer } from "../AdForm/AdFormStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLookup, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const eyeLookup: IconLookup = {
  prefix: "fas",
  iconName: "eye",
};

const RegisterForm = (): JSX.Element => {
  const blankFields = {
    id: "",
    name: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    city: "",
    ads: [],
  };
  const dispatch = useDispatch();

  const [userData, setUserData] = useState<User>(blankFields);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const resetForm = () => {
    setUserData(blankFields);
  };

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
    <AdFormContainer>
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
        <FontAwesomeIcon icon={eyeLookup} onClick={showPassword} />

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
        <button type="submit">REGISTER</button>
      </form>
    </AdFormContainer>
  );
};

export default RegisterForm;
