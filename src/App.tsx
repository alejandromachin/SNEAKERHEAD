import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SneakerInfoPage from "./pages/SneakerInfoPage/SneakerInfoPage";
import SneakerResultsPage from "./pages/SneakersResultsPage/SneakersResultsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sneakers" element={<SneakerResultsPage />} />
        <Route path="/sneakers/:id" element={<SneakerInfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
