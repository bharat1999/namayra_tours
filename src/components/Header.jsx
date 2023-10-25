import { Col, Image, Row } from "react-bootstrap";

import logo from "../assets/logo/logo.webp";

export default function Header() {
  return (
    <Row fluid className="brand-name-container">
      <Col className="brand-name-subcontainer">
        <Image src={logo} />
        <div>
          <p className="brand-name mb-0">Namayra</p>
          <p className="brand-name mb-0">Tourism</p>
        </div>
      </Col>
      <Col className="brand-name-subcontainer brand-contact-container">
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
