import { Container } from "react-bootstrap";
import video from "../assets/video/video.mp4";
export default function VideoPlayer() {
  return (
    <Container className="mt-5 p-5 video-container">
      <video autoPlay muted loop width="1200px">
        <source src={video} type="video/mp4" />
      </video>
    </Container>
  );
}
