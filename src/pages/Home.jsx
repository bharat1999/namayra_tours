import CustomNavbar from "../components/CustomNavbar";
import CustomCarousel from "../components/CustomCarousel";
import ActivitiesContainer from "../components/ActivitiesContainer";
import WhatsappBtn from "../components/WhatsappBtn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Features from "../components/Features";
import CategoriesContainer from "../components/CategoriesContainer";

export default function Home() {
  return (
    <>
      <Header />
      <CustomNavbar />
      <CustomCarousel />
      <CategoriesContainer />
      <ActivitiesContainer />
      <WhatsappBtn />
      <Features />
      <Footer />
    </>
  );
}
