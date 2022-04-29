import { url } from "inspector";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<Video>(initialState);

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

    if (!params.id) {
      await videoService.createVideo(video);
      toast.success("New Video Added");
      setVideo(initialState);
    } else {
      await videoService.updateVideo(params.id, video);
      toast.success(`Video ${video.title} Updated`);
    }
    navigate({ pathname: "/" });
  };

  const getVideo = async (_id: string) => {
    const res = await videoService.getVideo(_id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
  }, []);

  return (
    <Row className="create-video">
      <Col xs={12} className="form-col">
        <Card>
          <CardHeader>
            {params.id ? "Update Video" : "Add New Video"}
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  placeholder="write video title"
                  className="create-input"
                  value={video.title}
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
                  value={video.url}
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
                  value={video.description}
                  onChange={handleInputChange}
                  autoFocus
                />
              </FormGroup>

              {params.id ? (
                <Button type="submit" block color="info" className="">
                  Update Video
                </Button>
              ) : (
                <Button type="submit" block color="primary" className="">
                  Create Video
                </Button>
              )}
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default VideoForm;
