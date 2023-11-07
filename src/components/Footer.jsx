import { Container, Image } from "react-bootstrap";

import logo from "../assets/logo/logo_footer.webp";

export default function Footer() {
  return (
    <>
      <Container fluid className="p-5 footer">
        <Container className="d-flex flex-column align-items-center justify-content-center">
          <Image src={logo} />
        </Container>
        <Container className="mt-3 social-container d-flex justify-content-center gap-3">
          <div>
            <a
              href="https://instagram.com/namayratoursandtravels2022"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=+971558268344&amp;text=Hello"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
          <div>
            <a href="mailto:info@namayratourism.com">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </Container>
        <hr />
      </Container>
      <Container fluid className="text-center py-3 footer-title-container">
        <p className="mb-0">Namayra Tourism PVT. LIMITED</p>
      </Container>
    </>
  );
}
