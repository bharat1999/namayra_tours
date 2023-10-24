import { Container, Row } from "react-bootstrap";

import activitiesCategories from "../data/activities";
import ActivityCard from "./ActivityCard";
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
          <Row className="mb-5 justify-content-center">
            {category.activities.map((activity, idx) => (
              <ActivityCard key={idx} activity={activity} />
            ))}
          </Row>
        </Container>
      ))}
    </Container>
  );
}
