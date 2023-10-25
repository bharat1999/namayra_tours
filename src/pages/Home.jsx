import CustomNavbar from "../components/CustomNavbar";
import CustomCarousel from "../components/CustomCarousel";
import ActivitiesContainer from "../components/ActivitiesContainer";
import WhatsappBtn from "../components/WhatsappBtn";
import Footer from "../components/Footer";
import { useState } from "react";
import Header from "../components/Header";
import Features from "../components/Features";

export default function Home() {
  const [selectedCity, setCity] = useState("Dubai");
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <Header />
      <CustomNavbar />
      <CustomCarousel selectedCity={selectedCity} handleChange={handleChange} />
      <ActivitiesContainer selectedCity={selectedCity} />
      <WhatsappBtn />
      <Features />
      <Footer />
    </>
  );
}
