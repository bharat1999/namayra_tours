import { Container, Image } from "react-bootstrap";

import logo from "../assets/logo/logo_name_tagline.png";

export default function Footer() {
  return (
    <Container fluid className="p-5 footer">
      <Container className="d-flex justify-content-center">
        <Image src={logo} />
      </Container>
      <Container className="mt-3 social-container d-flex justify-content-center gap-3">
        <div>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </Container>
      <hr />
      <Container className="d-flex justify-content-center">
        <p>© 2023 Namayra Tours</p>
      </Container>
    </Container>
  );
}
