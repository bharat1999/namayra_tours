import { Carousel, Container, Form, InputGroup } from "react-bootstrap";

import PropTypes from "prop-types";

CustomCarousel.propTypes = {
  selectedCity: PropTypes.string,
  handleChange: PropTypes.func,
};

export default function CustomCarousel({ selectedCity, handleChange }) {
  return (
    <Container fluid className="px-0">
      <Carousel
        indicators={false}
        controls={false}
        slide="true"
        interval="3000"
      >
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
