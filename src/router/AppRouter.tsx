import React from "react";
import { Route, Routes } from "react-router-dom";

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={""} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
