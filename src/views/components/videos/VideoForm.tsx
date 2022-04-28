import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { Video } from "./VideoModel";
import * as videoService from "./VideoService";

interface Props {}

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = (props: Props) => {
  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });

  const handleInputChange = (e: InputChange) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.nodeValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await videoService.createVideo(video);
  };

  return (
    <Row className="create-video">
      <Col xs={12} className="form-col">
        <Card>
          <CardHeader>Add New Video</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  placeholder="write video title"
                  className="create-input"
                  onChange={handleInputChange}
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="create-input"
                  onChange={handleInputChange}
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="description"
                  color=""
                  rows={3}
                  placeholder="write video description"
                  className="create-input"
                  onChange={handleInputChange}
                  autoFocus
                />
              </FormGroup>
              <Button type="submit" block color="primary" className="">
                Create Video
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default VideoForm;
