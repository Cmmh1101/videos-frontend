import React, { useEffect, useState } from "react";
import axios from "axios";
import { Video } from "./VideoModel";
import { getVideos } from "./VideoService";

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
        return (
          <div key={video.id}>
            <h3>{video.title?.toUpperCase()}</h3>
            <span>{video.createdAt}</span>
          </div>
        );
      })}
    </div>
  );
};

export default VideosList;
