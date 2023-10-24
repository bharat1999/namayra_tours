import emailjs from "@emailjs/browser";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

EnquiryForm.propTypes = {
  toggleModalShow: PropTypes.func,
  toggleAlertShow: PropTypes.func,
  setAlertVariant: PropTypes.func,
};

export default function EnquiryForm({
  toggleModalShow,
  toggleAlertShow,
  setAlertVariant,
}) {
  const initialState = {
    name: "",
    email: "",
    mobile: "",
    query: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
  });

  const sendEmail = (formData) => {
    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_KEY}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        formData,
        `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          toggleModalShow();
          setAlertVariant("success");
          toggleAlertShow();
        },
        (error) => {
          console.log(error.text);
          toggleModalShow();
          setAlertVariant("danger");
          toggleAlertShow();
        }
      );
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(sendEmail)}>
        <Form.Group as={Col} className="mt-2" controlId="formGridName">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Name"
            {...register("name", { required: "Please Enter your Name" })}
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} className="mt-2" controlId="formGridEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            {...register("email", { required: "Please Enter your Email ID" })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} className="mt-2" controlId="formGridMobile">
          <Form.Label>Mobile no.*</Form.Label>
          <Form.Control
            name="mobile"
            placeholder=""
            {...register("mobile", {
              required: "Please Enter your Contact No",
            })}
          />
          {errors.mobile && (
            <Form.Text className="text-danger">
              {errors.mobile.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} className="mt-2" id="formGridQuery">
          <Form.Label>Query*</Form.Label>
          <Form.Control
            name="query"
            as="textarea"
            rows={3}
            {...register("query", { required: "Please Enter your Query" })}
          />
          {errors.query && (
            <Form.Text className="text-danger">
              {errors.query.message}
            </Form.Text>
          )}
        </Form.Group>
        <div className="d-flex justify-content-end my-3 gap-3">
          <Button variant="secondary" onClick={toggleModalShow}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
