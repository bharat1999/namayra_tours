import { Container, Carousel } from "react-bootstrap";
import testimonials from "../data/testimonials";

export default function Testimonial() {
  return (
    <Container className="testimonial">
      <div className="text-center my-5">
        <span className="title display-6 fw-bold">Testimonials</span>
      </div>

      <Carousel slide={true} indicators={false} interval={5000} className="">
        {testimonials.map((t, idx) => (
          <Carousel.Item key={idx} className="my-2">
            <div className="d-flex justify-content-center">
              <div className="rounded-circle shadow-1-strong mb-4 avatar">
                <p>{t.name.substring(0, 1)}</p>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3 text-center">{t.name}</h5>
                <p className="text-muted text-center">
                  <span>&quot;</span>
                  {t.review}
                  <span>&quot;</span>
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
