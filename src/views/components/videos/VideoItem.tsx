import React, { useEffect } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { deleteVideo } from "./VideoService";

import { Video } from "./VideoModel";

interface Props {
  video: Video;
  getVideos: () => void;
}

const VideoItem = ({ video, getVideos }: Props) => {
  const navigate = useNavigate();
  const params = useParams();

  const handleDelete = async (id: string) => {
    await deleteVideo(id);
    getVideos();
  };

  useEffect(() => {}, []);

  return (
    <Col md={4}>
      <Card className="video-card">
        <CardBody>
          <Col xs={12} className="d-flex justify-content-between">
            <h4>{video.title?.toUpperCase()}</h4>
            <Button
              onClick={() => navigate({ pathname: `/update/${video._id}` })}
            >
              Edit
            </Button>
            <span
              className="delete-icon"
              onClick={() => video._id && handleDelete(video._id)}
            >
              x
            </span>
          </Col>

          <p>{video.description}</p>
          <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VideoItem;
