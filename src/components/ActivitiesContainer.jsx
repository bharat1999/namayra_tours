import { Card, Container, Row, Col } from "react-bootstrap";

import activities from "../data/activities";

export default function ActivitiesContainer() {
  console.log(activities);
  return (
    <Container>
      {activities.map((activity, idx) => (
        <Container className="mt-4 px-5" key={idx}>
          <p className="display-7 fw-bold mb-0">{activity.title}</p>
          <p className="display-8 text-muted fw-light">{activity.subtitle}</p>
          <Row className="my-3">
            {activity.activities.map((activity, idx) => (
              <Col key={idx} className="d-flex justify-content-center">
                <Card style={{ width: "100%" }}>
                  <Card.Img
                    height="150px"
                    width="150px"
                    variant="top"
                    src={activity.image}
                  />
                  <Card.Body>
                    <Card.Title>{activity.title}</Card.Title>
                    <Card.Text className="pt-5">
                      <span className="text-muted">
                        <i className="bi bi-clock-fill"></i>
                        <span className="mx-3">{activity.duration}</span>
                      </span>
                    </Card.Text>
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
