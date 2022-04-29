import React, { useEffect, useState } from "react";
import { Video } from "./VideoModel";
import { getVideos } from "./VideoService";
import VideoItem from "./VideoItem";
import { Row } from "reactstrap";

const VideosList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const getAllVideos = async () => {
    const res = await getVideos();

    const orderedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(orderedVideos);
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return (
    <Row className="py-5">
      <h1>Videos List:</h1>

      {videos.map((video) => {
        return (
          <VideoItem video={video} key={video._id} getVideos={getAllVideos} />
        );
      })}
    </Row>
  );
};

export default VideosList;
