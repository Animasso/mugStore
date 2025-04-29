import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import MapContact from "./components/MapContact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Presentation />
      <Testimonials />
      <MapContact />
      <Footer />
    </div>
  );
};

export default App;
