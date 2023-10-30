import { Carousel, Container, Form, InputGroup } from "react-bootstrap";

import PropTypes from "prop-types";

CustomCarousel.propTypes = {
  selectedCity: PropTypes.string,
  handleChange: PropTypes.func,
};

import img1 from "../assets/home/1.webp";
import img2 from "../assets/home/2.webp";
import img3 from "../assets/home/3.webp";
import img4 from "../assets/home/4.webp";

export default function CustomCarousel({ selectedCity, handleChange }) {
  return (
    <Container fluid className="px-0">
      <Carousel
        indicators={false}
        controls={false}
        slide={true}
        interval="3000"
      >
        <Carousel.Item>
          <img className="home-carousel-image" src={img1} width="100%" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-carousel-image" src={img2} width="100%" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-carousel-image" src={img3} width="100%" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="home-carousel-image" src={img4} width="100%" />
        </Carousel.Item>
      </Carousel>
      <Container className="location-select">
        <InputGroup>
          <InputGroup.Text>
            <i className=" bi bi-geo-alt-fill"></i>
          </InputGroup.Text>
          <Form.Select value={selectedCity} onChange={handleChange}>
            <option value="Dubai">Dubai</option>
            <option value="AbuDhabi">Abu Dhabi</option>
          </Form.Select>
        </InputGroup>
      </Container>
    </Container>
  );
}
