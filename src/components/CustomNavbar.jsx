import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function CustomNavbar() {
  return (
    <Navbar expand="lg" data-bs-theme="light">
      <Container className="justify-content-center">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/about" className="text-white">
              About Us
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              title="Helpline"
              id="collasible-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#">
                UAE: +971 58 922 8370
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
        {/* </NavbarCollapse> */}
      </Container>
    </Navbar>
  );
}
