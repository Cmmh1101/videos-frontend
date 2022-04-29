import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import ReactPlayer from "react-player/youtube";
import { useNavigate } from "react-router-dom";

import { Video } from "./VideoModel";

interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {
  const navigate = useNavigate();

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
            <span className="delete-icon">x</span>
          </Col>

          <p>{video.description}</p>
          <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
            <ReactPlayer url={video.url} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VideoItem;
