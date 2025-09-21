import React from "react";
import Navbar from "./Components/LandingPage/Navbar.jsx";
import HeroSection from "./Components/LandingPage/HeroSection.jsx";
import SearchDropdown from "./Components/LandingPage/SearchDropdown.jsx";
import WhyUsSection from "./Components/LandingPage/WhyUsSection.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SearchDropdown />
      <WhyUsSection />
     
    </div>
      
  );
}

export default App;
