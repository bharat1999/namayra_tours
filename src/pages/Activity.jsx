import {
  Alert,
  Breadcrumb,
  Button,
  Carousel,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
//import { useParams } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";
import WhatsappBtn from "../components/WhatsappBtn";
import activityData from "../data/activity";
import Footer from "../components/Footer";
import { useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Activity() {
  const { activityID } = useParams();
  const activity = activityData[activityID];

  const [showModal, setModalShow] = useState(false);
  const [showAlert, setAlertShow] = useState(false);
  const [alertVariant, setAlertVariant] = useState("danger");

  const toggleModalShow = () => {
    if (showModal) {
      setModalShow(false);
    } else {
      setModalShow(true);
    }
  };

  const toggleAlertShow = () => {
    console.log("Alert Status" + showAlert);
    setAlertShow(true);
    setInterval(() => setAlertShow(false), 10000);
  };

  function nestedBulletPoints(bulletPoints) {
    return (
      <ul className="mb-3">
        {bulletPoints.map((e, idx) => (
          <li key={idx}>
            <span
              className={
                "fw-bold text-decoration-underline " + (e?.title ? "pe-2" : "")
              }
            >
              {e?.title}
            </span>
            {e?.content}
            {e?.bulletPoints ? nestedBulletPoints(e.bulletPoints) : ""}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <Header />
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
        <Container className="alert-container text-center">
          {showAlert ? (
            alertVariant === "success" ? (
              <Alert key={alertVariant} variant={alertVariant} dismissible>
                Enquiry sent successfully. We will reach out to you soon.
              </Alert>
            ) : (
              <Alert key={alertVariant} variant={alertVariant} dismissible>
                Failed to sent enquiry. Please try again later.
              </Alert>
            )
          ) : (
            ""
          )}
        </Container>

        <Carousel indicators={false} slide="true" interval="3000">
          {activity?.images?.map((image, idx) => (
            <Carousel.Item key={idx}>
              <img className="carousel-image" src={image} width="100%" />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-container title-container d-flex justify-content-between align-items-center">
          <span className="display-6 fw-bold mb-0 heading">
            {activity?.title}
          </span>
          <div className="enquiry-btn">
            <Button onClick={toggleModalShow}>Enquire Now</Button>
          </div>
        </div>
        <div className="text-container mt-3">
          <span className="fw-bold fs-3  ps-2 subheading">
            About the experience
          </span>
          {activity?.about.map((e, idx) => (
            <div key={idx}>
              <p className="title">{e?.title}</p>
              <p className="fw-light">
                <span
                  className={
                    "fw-bold text-decoration-underline content-subheading " +
                    (e?.subheading ? "pe-2" : " ")
                  }
                >
                  {e?.subheading}
                </span>
                {e?.content}
              </p>
            </div>
          ))}
        </div>
        {activity?.otherInfo?.map((info, idx) => (
          <div key={idx} className="text-container mt-3">
            <span className="fw-bold fs-3 ps-2 subheading">{info.title}</span>
            {nestedBulletPoints(info?.bulletPoints)}
          </div>
        ))}
      </div>
      <WhatsappBtn />
      <Footer />

      <Modal show={showModal} onHide={toggleModalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Enquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnquiryForm
            toggleModalShow={toggleModalShow}
            toggleAlertShow={toggleAlertShow}
            setAlertVariant={(variant) => setAlertVariant(variant)}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
