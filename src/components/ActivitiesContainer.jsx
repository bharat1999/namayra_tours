import { Card, Container, Row, Col, Button } from "react-bootstrap";

import activitiesCategories from "../data/activities";

import PropTypes from "prop-types";

ActivitiesContainer.propTypes = {
  selectedCity: PropTypes.string,
};

export default function ActivitiesContainer({ selectedCity }) {
  return (
    <Container>
      {activitiesCategories[selectedCity].map((category, idx) => (
        <Container className="mt-4 px-5" key={idx}>
          <p className="display-6 fs-5 fw-bold mb-0">{category.heading}</p>
          <p className="display-6 fs-6 text-muted fw-light fst-italic">
            {category.subheading}
          </p>
          <Row className="mb-5">
            {category.activities.map((activity) => (
              <Col
                key={activity.key}
                className="d-flex mt-4 justify-content-center"
                xs="auto"
                lg={true}
              >
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    height="150px"
                    width="150px"
                    variant="top"
                    src={activity.image}
                  />
                  <Card.Body className="pb-0">
                    <Card.Title className="fs-6">{activity.title}</Card.Title>
                    <Card.Text className="pt-3 mb-0">
                      <div className="d-flex text-muted justify-content-between">
                        <span>
                          <i className="bi bi-clock-fill"></i>
                          <span className="mx-2">{activity.duration}</span>
                        </span>
                        <span>
                          <p className="fw-bold fst-italic">
                            AED: {activity.price}
                          </p>
                        </span>
                      </div>
                    </Card.Text>
                    <div className="text-center mb-3">
                      <Button
                        className="activityBtn"
                        href={`activity/${activity.key}`}
                      >
                        View Detail
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ))}
    </Container>
  );
}
