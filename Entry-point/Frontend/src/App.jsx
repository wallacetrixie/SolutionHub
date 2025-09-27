import React from "react";
import Navbar from "./Components/LandingPage/Navbar.jsx";
import HeroSection from "./Components/LandingPage/HeroSection.jsx";
import SearchDropdown from "./Components/LandingPage/SearchDropdown";
import WhyUsSection from "./Components/LandingPage/WhyUsSection.jsx";
import HowItWorks from "./Components/LandingPage/HowItWorks.jsx";
import PopularCategories from "./Components/LandingPage/PopularCategories.jsx";
import TestimonialSection from "./Components/LandingPage/Testimonials.jsx";
import PricingPlans from "./Components/LandingPage/PricingPlan.jsx";
import Insights from "./Components/LandingPage/Insights.jsx";
import Newsletter from "./Components/LandingPage/News.jsx";
import Footer from "./Components/LandingPage/Footer.jsx";
import Location from "./Components/LandingPage/Location.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <HeroSection />
        <SearchDropdown />
      </section>
      <section id="whyus">
        <WhyUsSection />
      </section>
      <section id="howitworks">
        <HowItWorks />
      </section>
      <PopularCategories />
      <TestimonialSection />
      <section id="pricing">
        <PricingPlans />
      </section>
      <Insights />
      <Location />
      <Newsletter />
      <section id="footer">
        <Footer />
      </section>
    </div>
      
  );
}

export default App;
