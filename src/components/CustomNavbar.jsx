import { Dropdown, DropdownButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo.png";

export default function CustomNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex flex-column flex-lg-row align-items-center"
        >
          <img
            src={logo}
            className="image-thumbnail align-top"
            alt="React Bootstrap logo"
            width="150vmax"
          />
          <h1 className="brand-name">Namayra Tours</h1>
        </Navbar.Brand>
        <Nav className="me align-items-center">
          <Nav.Item>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item href="#">
            <DropdownButton
              align="end"
              variant="light"
              title="Helpline"
              size="sm"
            >
              <Dropdown.Item>India +91 1234567890</Dropdown.Item>
              <Dropdown.Item>India +91 1234567890</Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
