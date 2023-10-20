import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CustomNavbar from "../components/CustomNavbar";

export default function Activity() {
  const { activityID } = useParams();
  return (
    <Container>
      <CustomNavbar />
      <p>Activity: {activityID}</p>
    </Container>
  );
}
