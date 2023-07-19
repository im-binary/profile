import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Resume } from "../pages/Resume";
import { useLocation } from "react-router-dom";
import { Portfolio } from "../pages/Portfolio";
import { Piece } from "../pages/Piece";

export function Router() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Navigate to='/resume' replace={true} />} />
      <Route
        path='/resume'
        element={
          <Suspense fallback={<>로딩 중</>}>
            <Resume />
          </Suspense>
        }
      />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/piece' element={<Piece />} />
    </Routes>
  );
}
