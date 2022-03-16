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

  const resetForm = () => {
    setUserData(blankFields);
  };

  const registerUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const adDataFinal = new FormData();
    adDataFinal.append("name", userData.name);
    adDataFinal.append("lastname", userData.lastname);
    adDataFinal.append("username", userData.username);
    adDataFinal.append("password", userData.password);
    adDataFinal.append("email", userData.email);
    adDataFinal.append("city", userData.city);
    dispatch(registerThunk(adDataFinal));
    resetForm();
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <AdFormContainer>
      <form onSubmit={registerUser} noValidate autoComplete="off">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" onChange={changeData} required />
        <label htmlFor="lastname">Lastname: </label>
        <input type="text" id="lastname" onChange={changeData} required />
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" onChange={changeData} required />
        <label htmlFor="password">Password: </label>
        <input type="password" id="username" onChange={changeData} required>
          <FontAwesomeIcon icon={eyeLookup} />
        </input>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" onChange={changeData} required />
        <label htmlFor="city">City: </label>
        <input type="text" id="city" onChange={changeData} required />
        <button type="submit">LIST</button>
      </form>
    </AdFormContainer>
  );
};

export default RegisterForm;
