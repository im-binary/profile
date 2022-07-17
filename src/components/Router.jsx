import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";

export default function Router() {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}
