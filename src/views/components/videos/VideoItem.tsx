import React from "react";
import { Video } from "./VideoModel";

interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {
  return (
    <div key={video.id}>
      <h3>{video.title?.toUpperCase()}</h3>
      <p>{video.description}</p>
      <span>{video.createdAt}</span>
    </div>
  );
};

export default VideoItem;
