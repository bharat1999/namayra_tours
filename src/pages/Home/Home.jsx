import CustomNavbar from "../../components/CustomNavbar";
import CustomCarousel from "../../components/CustomCarousel";
import ActivitiesContainer from "../../components/ActivitiesContainer";

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <CustomCarousel />
      <ActivitiesContainer />
    </div>
  );
}
