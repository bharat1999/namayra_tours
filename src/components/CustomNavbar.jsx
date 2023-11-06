import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" data-bs-theme="light">
      <Container className="justify-content-center">
        <Nav>
          <Nav.Item className="text-center">
            <Nav.Link href="/about" className="text-white">
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="text-center">
            <NavDropdown
              title="Helpline"
              id="collasible-nav-dropdown"
              align="center"
            >
              <NavDropdown.Item href="tel:+971558268344">
                UAE: +971 558268344
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
