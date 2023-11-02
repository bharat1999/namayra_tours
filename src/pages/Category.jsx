import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CustomNavbar from "../components/CustomNavbar";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import categoryData from "../data/category";

export default function Category() {
  const { categoryID } = useParams();
  const category = categoryData[categoryID];

  function nestedBulletPoints(bulletPoints) {
    return (
      <ul className="mt-3">
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
                Category: {category?.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <div className="text-container d-flex justify-content-between align-items-center">
          <span className="display-6 fw-bold mb-0 heading">
            {category?.title}
          </span>
        </div>
        <div className="text-container mt-3">
          <span className="fw-bold fs-3  ps-2 subheading">
            About the experience
          </span>
          <div className="mt-3">
            {category?.about?.content?.map((e, idx) => (
              <div key={idx}>
                <p className="">{e}</p>
              </div>
            ))}
          </div>
          {nestedBulletPoints(category?.about?.bulletPoints)}
          <div className="mt-3">
            {category?.about?.additionalContent?.map((e, idx) => (
              <div key={idx}>
                <p className="fw-light">{e}</p>
              </div>
            ))}
          </div>
        </div>
        {category?.otherInfo?.map((info, idx) => (
          <div key={idx} className="text-container mt-3">
            <span className="fw-bold fs-3  ps-2 subheading">{info.title}</span>
            <ul className="mt-3">
              {info.bulletPoints.map((e, idx) => (
                <li key={idx}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
