import { Button, Card, Carousel, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

ActivityCard.propTypes = {
  activity: PropTypes.object,
};

export default function ActivityCard({ activity }) {
  const [isCarouselActive, setCarousel] = useState(false);
  const [carouselActiveInterval, setCarouselInterval] = useState(100000);

  function activateCarousel() {
    setCarousel(true);
    setCarouselInterval(1500);
  }

  function deactivateCarousel() {
    setCarousel(false);
    setCarouselInterval(100000);
  }

  return (
    <Col
      key={activity.key}
      className="d-flex mt-4 justify-content-center"
      xs="auto"
      lg={3}
    >
      <Card
        style={{ width: "300px" }}
        onMouseOver={activateCarousel}
        onMouseOut={deactivateCarousel}
      >
        <Carousel
          interval={carouselActiveInterval}
          indicators={false}
          controls={false}
          slide={isCarouselActive}
          pause={false}
          touch={true}
        >
          {activity.images.map((image, idx) => (
            <Carousel.Item key={idx}>
              <Card.Img
                className="bottom-border-radius-0"
                height="150px"
                width="100%"
                variant=""
                src={image}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body className="pb-0">
          <Card.Title className="fs-6">{activity.title}</Card.Title>
          <Card.Text className="mb-0">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span style={{ "font-size": ".7rem" }}>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </span>
              <div className="text-center">
                <Button
                  className="activityBtn"
                  href={`activity/${activity.key}`}
                >
                  View Detail
                </Button>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
