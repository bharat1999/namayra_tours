import { Dropdown, DropdownButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo_name_tagline.png";

export default function CustomNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="image-thumbnail align-top"
            alt="React Bootstrap logo"
            width="150vmax%"
          />
        </Navbar.Brand>
        <Nav className="me-5">
          <Nav.Item href="#">
            <DropdownButton variant="light" title="Helpline" size="sm">
              <Dropdown.Item as="button">India +91 1234567890</Dropdown.Item>
              <Dropdown.Item as="button">India +91 1234567890</Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
