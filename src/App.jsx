import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <main className="bg-black">
      {/* nav  */}
      <Navbar />
      {/* hero  */}
      <Hero />
      {/* highlights */}
      <Highlights />
    </main>
  );
};

export default App;
