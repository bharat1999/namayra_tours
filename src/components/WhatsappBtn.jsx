import { Button, Container } from "react-bootstrap";

export default function WhatsappBtn() {
  return (
    <Container>
      <Button
        size="lg"
        className="whatsappBtn rounded-pill"
        href="https://api.whatsapp.com/send?phone=+971558268344&amp;text=Hello"
        target="_blank"
      >
        <div className="p-2 d-flex gap-2">
          <i className="bi bi-whatsapp"></i>
          <span>Message Us</span>
        </div>
      </Button>
    </Container>
  );
}
