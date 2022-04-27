import React from "react";
import VideosList from "./components/videos/VideosList";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <VideosList />
    </div>
  );
};

export default HomePage;
