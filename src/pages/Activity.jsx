import { Breadcrumb, Button, Carousel, Col, Modal, Row } from "react-bootstrap";
//import { useParams } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import WhatsappBtn from "../components/WhatsappBtn";
import activityData from "../data/activity";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Activity() {
  //const { activityID } = useParams();
  const activity = activityData[1];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CustomNavbar />
      <div className="activity-container">
        <Row>
          <Col xs={0} sm={0}></Col>
          <Col
            xs={12}
            className="d-flex justify-content-start justify-content-lg-end"
          >
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>
                Activity: {activity?.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Carousel indicators={false} slide="true" interval="3000">
          <Carousel.Item>
            <img src="https://picsum.photos/1920/400" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/1920/400" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://picsum.photos/1920/400" />
          </Carousel.Item>
        </Carousel>
        <div className="enquiry-btn">
          <Button onClick={handleShow}>Enquiry</Button>
        </div>
        <div className="text-container">
          <span className="display-6 fw-bold mb-0 heading">
            {activity?.title}
          </span>
        </div>
        <div className="text-container mt-3">
          <span className="fw-bold fs-3  ps-2 subheading">
            About the experience
          </span>
          {activity?.about.map((e, idx) => (
            <div key={idx}>
              <p className="fw-bold">{e?.title}</p>
              <p>{e?.content}</p>
            </div>
          ))}
        </div>
        <div className="text-container mt-3">
          <span className="fw-bold fs-3  ps-2 subheading">Highlights</span>
          <ul className="mt-3">
            {activity.highlights.map((e, idx) => (
              <li key={idx}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
      <WhatsappBtn />
      <Footer />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
