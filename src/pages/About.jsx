import { Container } from "react-bootstrap";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsappBtn from "../components/WhatsappBtn";

export default function About() {
  return (
    <>
      <Header />
      <CustomNavbar />
      <Container className="about-page text-center py-4">
        <div className="mt-3">
          <span className="heading">Our Story</span>
          <p className="content pt-3">
            Traveling is living, and that&apos;s what we at Namayra Tourism
            believe. We&apos;ve been in the travel business for 20 years,
            specializing in providing both domestic and international travel
            services to a wide range of happy and returning customers.
            We&apos;re proud to have been accredited by prestigious travel
            associations and apex bodies, and our motto has remained the same
            since the beginning: &ldquo;customer service with a smile&rdquo;! We
            have always strived to achieve our belief that success is determined
            by the quantity of happy clients.
          </p>
          <p className="subheading">Why Namayra Travels ?</p>
          <p className="content">
            From premium luxury hotels to holiday packages, we offer specialized
            travel services that span both domestic and international travel
            destinations. With a motivated and knowledgeable staff, We work hard
            and are dedicated to giving every one of our visitors an amazing
            travel experience. Our team is passionate and well-trained.
          </p>
          <p className="subheading">
            What distinguishes us from an internet portal?
          </p>
          <p className="content">
            Our travel advisors are knowledgeable about the newest travel trends
            and have received training in understanding the needs and
            preferences of our visitors. Tailored itineraries are woven into
            successful vacation programs based on individual needs.
            <br /> We design customized travel packages for events such as
            family vacations, honeymoons, conferences, incentive trips,
            technical visits, golfing tours, sporting trips, and special
            interest trips like tours for senior citizens and women only. A
            travel counselor will help you every step of the way from the moment
            you contact us until the end of your trip. We give every one of our
            valued clients our undivided attention. Our goal is to make each
            trip an unforgettable one.
          </p>
        </div>
        <div className="mt-3">
          <span className="heading">Our Story</span>
          <p className="content">
            At Namayra Tourism, we are passionate about creating exceptional
            travel memories for our valued customers. Our journey began with a
            deep love for the vibrant culture, breathtaking landscapes, and rich
            heritage of the United Arab Emirates. We wanted to share this
            passion with the world, and that&apos;s how Namayra Tourism was
            born. Namayra Tourism, is your gateway to unforgettable travel
            experiences in Dubai and Abu Dhabi. We are Namayra Tours and Travels
            LLC, a leading travel company based in Dubai, dedicated to providing
            you with a wide range of activities, tours, and services to explore
            the magnificent cities of Dubai and Abu Dhabi. We at Namayra are
            committed to providing our clients with the best of services and a
            wonderful experience.
          </p>
        </div>
        <div className="mt-3">
          <span className="heading">Our Mission</span>
          <p className="content">
            Our mission is to make your visit to Dubai and Abu Dhabi truly
            extraordinary. We strive to offer you an authentic and immersive
            experience, allowing you to connect with the heart and soul of these
            beautiful cities. Whether you&apos;re a first-time visitor or a
            seasoned traveler, we are here to ensure that your time in the UAE
            is filled with unforgettable moments.
          </p>
        </div>
        <div className="mt-3">
          <span className="heading">Why Choose Namayra Tourism</span>
          <ul>
            <li className="content">
              <span className="bullet-heading">Local Expertise:-</span> With a
              team of passionate locals who have in-depth knowledge of the
              region, we can provide you with unique insights and
              recommendations.
            </li>
            <li className="content">
              <span className="bullet-heading">Variety of Experiences:-</span>
              We offer a wide array of activities, tours, and services, catering
              to all kinds of travelers, from adventurous explorers to cultural
              enthusiasts.
            </li>
            <li className="content">
              <span className="bullet-heading">
                Customer-Centric Approach:-
              </span>
              Your satisfaction is our top priority. Our dedicated team is
              committed to making your experience hassle-free and memorable.
            </li>
            <li className="content">
              <span className="bullet-heading">Quality and Safety:-</span>
              We maintain the highest standards of safety and quality in all our
              offerings, ensuring that you have a worry-free journey.
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <span className="heading">Our Services</span>
          <p className="content">
            Explore our diverse range of services, including:-
          </p>
          <ul>
            <li className="content">
              <span className="bullet-heading">City Tours:-</span>
              Discover the iconic landmarks and hidden gems of Dubai and Abu
              Dhabi with our guided city tours.
            </li>
            <li className="content">
              <span className="bullet-heading">Desert Safaris:-</span>
              Experience the thrill of a desert safari, complete with dune
              bashing, camel rides, and traditional entertainment.
            </li>
            <li className="content">
              <span className="bullet-heading">Cultural Experiences:-</span>
              Immerse yourself in the rich Emirati culture through cultural
              workshops, heritage village visits, and more.
            </li>
            <li className="content">
              <span className="bullet-heading">Water Adventures:-</span>
              Enjoy water-based activities such as yacht cruises, snorkeling,
              and jet skiing.
            </li>
            <li className="content">
              <span className="bullet-heading">Customized Packages:-</span>
              Tailor your own itinerary with our customizable tour packages.
            </li>
          </ul>
        </div>
      </Container>
      <WhatsappBtn />
      <Footer />
    </>
  );
}
