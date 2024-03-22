import Countries from "./components/Countries";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import { LampDemo } from "./components/LampDemo";
import MobileServicesPage from "./components/MobileServicesPage";
import MobileTestimonial from "./components/MobileTestimonial";
import RegistrationForm from "./components/RegistrationForm";
import Services from "./components/Services";
import WhatsApp from "./components/WhatsApp";

// #52813d
// #8ec442
// #eff8ff
// Zen Antique

export default function Home() {
  return (
    <div className="font-body">
      <WhatsApp />
      <Hero />
      <div className="hidden sm:flex">
        <Services />
      </div>
      <div className="sm:hidden flex">
        <MobileServicesPage />
      </div>
      <Countries />
      <LampDemo />
      <RegistrationForm />
      <div className="hidden sm:flex">
        <InfiniteMovingCardsDemo />
      </div>
      <div className="sm:hidden">
        <MobileTestimonial />
      </div>
      <Footer />
    </div>
  );
}
