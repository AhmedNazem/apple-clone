import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Models from "./components/Models";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="bg-black">
      {/* nav  */}
      <Navbar />
      {/* hero  */}
      <Hero />
      {/* highlights */}
      <Highlights />
      <Models />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
