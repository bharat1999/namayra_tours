import { Container, Row } from "react-bootstrap";

import activitiesCategories from "../data/activities";
import ActivityCard from "./ActivityCard";

export default function ActivitiesContainer() {
  return (
    <Container>
      {activitiesCategories.map((category, idx) => (
        <Container className="mt-4" key={idx}>
          <div className="text-center activity-category">
            <span className="pb-1 heading">{category.heading}</span>
            <p className="mt-3 text-muted fst-italic subheading">
              <span>&quot;</span>
              {category.subheading}
              <span>&quot;</span>
            </p>
          </div>
          <Row className="mb-5 justify-content-center">
            {category.activities?.map((activity, idx) => (
              <ActivityCard key={idx} activity={activity} />
            ))}
          </Row>
        </Container>
      ))}
    </Container>
  );
}
