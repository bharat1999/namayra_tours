import { Button, Card, Carousel, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";

ActivityCard.propTypes = {
  activity: PropTypes.object,
};

export default function ActivityCard({ activity }) {
  const [isCarouselActive, setCarousel] = useState(false);

  function activateCarousel() {
    setCarousel(true);
  }

  function deactivateCarousel() {
    setCarousel(false);
  }

  return (
    <Col
      key={activity.key}
      className="d-flex mt-4 justify-content-center"
      xs="auto"
      lg={true}
    >
      <Card
        style={{ width: "100%" }}
        onMouseOver={activateCarousel}
        onMouseOut={deactivateCarousel}
      >
        <Carousel
          interval={1500}
          indicators={false}
          controls={false}
          slide={isCarouselActive}
          pause={false}
        >
          <Carousel.Item>
            <Card.Img
              height="150px"
              width="150px"
              variant="top"
              src={activity.image}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card.Img
              height="150px"
              width="150px"
              variant="top"
              src={activity.image}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card.Img
              height="150px"
              width="150px"
              variant="top"
              src={activity.image}
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body className="pb-0">
          <Card.Title className="fs-6">{activity.title}</Card.Title>
          <Card.Text className="pt-3 mb-0">
            <div className="d-flex text-muted justify-content-between">
              <span>
                <i className="bi bi-clock-fill"></i>
                <span className="mx-2">{activity.duration}</span>
              </span>
              <span>
                <p className="fw-bold fst-italic">AED: {activity.price}</p>
              </span>
            </div>
          </Card.Text>
          <div className="text-center mb-3">
            <Button className="activityBtn" href={`activity/${activity.key}`}>
              View Detail
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
