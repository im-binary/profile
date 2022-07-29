import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { useLocation } from "react-router-dom";

export default function Router() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Router");
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}
