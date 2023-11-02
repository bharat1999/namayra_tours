import { Card, Col, Row } from "react-bootstrap";

import categoriesData from "../data/categories";

export default function CategoriesContainer() {
  return (
    <Row className=" categories-container justify-content-center mx-5">
      {categoriesData.map((category) => (
        <Col key={category.key}>
          <a href={`category/${category.key}`} className="text-decoration-none">
            <Card className="d-flex align-items-center">
              <Card.Img
                src={category.image}
                className="rounded-circle"
              ></Card.Img>
              <Card.Body className="pb-0 text-center">
                <Card.Title className="mb-0">{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
}
