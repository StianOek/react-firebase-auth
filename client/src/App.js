import React, { useContext } from "react";

import Auth from "../pages/Auth/Auth";
import { Route, Routes, Navigate } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Profile from "../pages/Profile/Profile";
import Home from "../pages/Home/Home";
import Nav from "../components/Nav/Nav";
import AuthContext from "./store/auth-context";
const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <div>
        <Nav />
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Home />} />
          {!isLoggedIn && <Route path="/login" element={<Auth />} />}
          {isLoggedIn && <Route path="/profile" element={<Profile />} />}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
