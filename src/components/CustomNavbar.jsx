import { NavDropdown, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../assets/logo/logo.png";

export default function CustomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="light">
      <Container className="align-items-lg-center align-items-end justify-content-between">
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
          <div className="brand-name-container">
            <h3 className="brand-name">Namayra</h3>
            <h3 className="brand-name">Tourism</h3>
          </div>
        </Navbar.Brand>
        <NavbarToggle />
        <NavbarCollapse>
          <Nav className="ms-auto align-items-end" navbarScroll>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown
              title="Helpline"
              id="collasible-nav-dropdown"
              align="end"
              className="text-end"
            >
              <NavDropdown.Item href="#">
                UAE: +971 58 922 8370
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
