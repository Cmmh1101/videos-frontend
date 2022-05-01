import { url } from "inspector";
import React, { ChangeEvent, FormEvent } from "react";
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

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const SignInForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const initialState = {
    title: "",
    description: "",
    url: "",
  };
  //   const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    // setVideo({
    //   ...video,
    //   [e.target.name]: e.target.value,
    //   [e.target.name]: e.target.nodeValue,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!params.id) {
    //   await videoService.createVideo(video);
    //   toast.success("New Video Added");
    //   setVideo(initialState);
    // } else {
    //   await videoService.updateVideo(params.id, video);
    //   toast.success(`Video ${video.title} Updated`);
    // }
    navigate({ pathname: "/" });
  };

  //   const getVideo = async (_id: string) => {
  //     const res = await videoService.getVideo(_id);
  //     const { title, description, url } = res.data;
  //     setVideo({ title, description, url });
  //   };

  //   useEffect(() => {
  //     if (params.id) getVideo(params.id);
  //   }, []);

  return (
    <Row className="create-video">
      <Col xs={12} className="form-col">
        <Card className="col-6">
          <CardHeader>Sign In</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="email"
                  name="title"
                  placeholder="example@email.com"
                  className="create-input"
                  //   value={video.title}
                  onChange={handleInputChange}
                  autoFocus
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="url"
                  placeholder="password"
                  className="create-input"
                  onChange={handleInputChange}
                  autoFocus
                />
              </FormGroup>

              <Button type="submit" block color="primary" className="">
                Sign in
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default SignInForm;
