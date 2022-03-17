import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AdInfoPage from "./pages/AdMoreInfoPage/AdMoreInfoPage";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SneakerInfoPage from "./pages/SneakerInfoPage/SneakerInfoPage";
import SneakerResultsPage from "./pages/SneakersResultsPage/SneakersResultsPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import { loginAction } from "./redux/actions/usersActionCreator/usersActionCreator";
import { User } from "./Types/User";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("tokenKey");
    if (token) {
      const userInfo: User = jwtDecode(token);
      dispatch(loginAction(userInfo));
    }
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/privateArea" element={<UserInfoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sneakers" element={<SneakerResultsPage />} />
        <Route path="/sneakers/:id" element={<SneakerInfoPage />} />
        <Route path="/ads/:id" element={<AdInfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
