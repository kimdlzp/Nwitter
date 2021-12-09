import React, { useState } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact={true} path={"/"} element={<Home />}></Route>
            <Route exact={true} path={"/profile"} element={<Profile />}></Route>
          </>
        ) : (
          <>
            <Route exact={true} path={"/"} element={<Auth />}></Route>
          </>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
