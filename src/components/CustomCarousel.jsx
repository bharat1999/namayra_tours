import { Carousel } from "react-bootstrap";

export default function CustomCarousel() {
  return (
    <Carousel indicators="false" slide="true" interval="3000">
      <Carousel.Item>
        <img src="https://picsum.photos/1920/400" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/1920/400" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://picsum.photos/1920/400" />
      </Carousel.Item>
    </Carousel>
  );
}
