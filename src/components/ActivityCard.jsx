import { Button, Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";

ActivityCard.propTypes = {
  activity: PropTypes.object,
};

export default function ActivityCard({ activity }) {
  return (
    <Col
      key={activity.key}
      className="d-flex mt-5 justify-content-center"
      xs={6}
      lg="auto"
    >
      <Card
        style={{ width: "218px" }}
        className="align-items-center activity-card"
      >
        <Card.Img
          className="activity-card-image"
          variant=""
          src={activity.image}
        />
        <Card.Body className="py-1 w-100">
          <Card.Title>{activity.title}</Card.Title>
          <Card.Text className="mb-0">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column align-items-center">
                <span
                  className="text-muted fst-italic"
                  style={{ fontSize: ".7rem" }}
                >
                  Rating
                </span>
                <span style={{ fontSize: ".7rem" }}>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </span>
              </div>

              <div className="text-center">
                <Button
                  className="activityBtn"
                  href={`activity/${activity.key}`}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
