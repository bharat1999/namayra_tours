import { Dropdown, DropdownButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function CustomNavbar() {
  return (
    <Navbar bg="white" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://picsum.photos/200/100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="d-flex">
          <Nav.Item href="#">
            <DropdownButton
              variant="light"
              id="helpline-dropdown"
              title="Helpline button"
              size="sm"
            >
              <Dropdown.Item as="button">India +91 1234567890</Dropdown.Item>
              <Dropdown.Item as="button">India +91 1234567890</Dropdown.Item>
            </DropdownButton>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
