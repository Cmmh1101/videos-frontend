import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../views/HomePage";

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
