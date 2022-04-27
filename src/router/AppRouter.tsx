import React from "react";
import { Route, Routes } from "react-router-dom";
import VideoForm from "../views/components/videos/VideoForm";
import HomePage from "../views/HomePage";

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/newVideo" element={<VideoForm />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRouter;
