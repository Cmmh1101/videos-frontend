import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import VideoForm from "../views/components/videos/VideoForm";
import HomePage from "../views/HomePage";

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newVideo" element={<VideoForm />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Container>
  );
};

export default AppRouter;
