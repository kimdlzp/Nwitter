import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact={true} path={"/"} element={<Home />}></Route>
          </>
        ) : (
          <Route exact={true} path={"/"} element={<Auth />}></Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
