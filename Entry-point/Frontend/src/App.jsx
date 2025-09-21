import React from "react";
import Navbar from "./Components/LandingPage/Navbar.jsx";
import HeroSection from "./Components/LandingPage/HeroSection.jsx";
import SearchDropdown from "./Components/LandingPage/SearchDropdown.jsx";
import WhyUsSection from "./Components/LandingPage/WhyUsSection.jsx";
import HowItWorks from "./Components/LandingPage/HowItWorks.jsx";
import PopularCategories from "./Components/LandingPage/PopularCategories.jsx";
import TestimonialSection from "./Components/LandingPage/Testimonials.jsx";
import PricingPlans from "./Components/LandingPage/PricingPlan.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchDropdown />
      <WhyUsSection />
      <HowItWorks />
      <PopularCategories />
      <TestimonialSection />
      <PricingPlans />
    </div>
      
  );
}

export default App;
