import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Presentation />
    </div>
  );
};

export default App;
