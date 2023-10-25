import { Col, Container, Row } from "react-bootstrap";

export default function Features() {
  return (
    <Container className="text-center mb-4 feature">
      <span className="title display-6 fw-bold">Why Choose Us</span>
      <Row>
        <Col lg={4} xs={12} className="feature-card">
          <i className="bi bi-tag"></i>
          <p className="heading">Best Prices</p>
          <p className="subheading">
            <span>&quot;</span>We strive to provide best prices while still
            maintaining high-quality travel experiences for our customers.
            <span>&quot;</span>
          </p>
        </Col>
        <Col lg={4} xs={12} className="feature-card">
          <i className="bi bi-award"></i>
          <p className="heading">Best in the Class Service</p>
          <p className="subheading">
            <span>&quot;</span>With a focus on excellence and customer
            satisfaction, we strive to exceed expectations on every trip.
            <span>&quot;</span>
          </p>
        </Col>
        <Col lg={4} xs={12} className="feature-card">
          <i className="bi bi-globe2"></i>
          <p className="heading">Plethora of Tours</p>
          <p className="subheading">
            <span>&quot;</span>Bunch of activities to choose from.
            <span>&quot;</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
