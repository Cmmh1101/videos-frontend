import React, { useEffect, useState } from "react";
import axios from "axios";
import { Video } from "./VideoModel";
import { getVideos } from "./VideoService";
import VideoItem from "./VideoItem";

const VideosList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const getAllVideos = async () => {
    const res = await getVideos();
    setVideos(res.data);
    console.log(videos, "videos");
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <div>
      <h1>Videos List:</h1>
      {videos.map((video) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
};

export default VideosList;
