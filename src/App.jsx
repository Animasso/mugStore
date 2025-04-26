import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import MapContact from "./components/MapContact";
const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Presentation />
      <MapContact />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
