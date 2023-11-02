import { Col, Image, Row } from "react-bootstrap";

import logo from "../assets/logo/logo.webp";

export default function Header() {
  return (
    <Row className="header-container mx-0">
      <Col className="header-subcontainer">
        <a href="/">
          <Image src={logo} />
        </a>
        <a href="/" className="text-decoration-none">
          <div>
            <p className="brand-name mb-0">Namayra</p>
            <p className="brand-name mb-0">Tourism</p>
          </div>
        </a>
      </Col>
      <Col className="header-subcontainer header-contact-container">
        <a
          href="https://api.whatsapp.com/send?phone=+971589228370&amp;text=Hello"
          target="_blank"
          rel="noreferrer"
          className="d-flex align-items-center"
        >
          <i className="bi bi-whatsapp"></i>
          <span className="ms-1 text-white">+971 589228370</span>
        </a>
        <a href="mailto:info@namayratourism.com">
          <i className="bi bi-envelope"></i>
          <span className="text-white ms-1">info@namayratourism.com</span>
        </a>
      </Col>
    </Row>
  );
}
