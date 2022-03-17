import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutAction } from "../../redux/actions/usersActionCreator/usersActionCreator";
import { RootState } from "../../redux/store";
import {
  UserInfo,
  UserInfoContainer,
  UserNav,
  UserTittle,
} from "./UserInfoPageStyles";

const UserPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const logOut = (event: React.MouseEvent) => {
    event.preventDefault();
    localStorage.removeItem("tokenKey");
    dispatch(logOutAction());
  };
  const user = useSelector((state: RootState) => state.user);

  return (
    <UserInfoContainer>
      <UserTittle>
        <h1>Hello, {user.name}</h1>
      </UserTittle>
      <UserInfo>
        <h2>Profile info:</h2>
        <h3>Name:</h3>
        <p>
          {user.name} {user.lastname}
        </p>
        <h3>Username:</h3>
        <p>{user.username}</p>
        <h3>Email address:</h3>
        <p>{user.email}</p>
      </UserInfo>
      <UserNav>
        <Link to="">Edit info</Link>
        <Link to="" onClick={logOut}>
          Log out
        </Link>
        <Link to="">Items on sale</Link>
      </UserNav>
    </UserInfoContainer>
  );
};

export default UserPage;
