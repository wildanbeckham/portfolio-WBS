import React from "react"
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import PortfolioList from "./component/PortofolioList";
import About from "./component/About";
import Contact from "./component/Contact";
import Advice from "./component/Advice";

function App() {
  return (
    <div className="page-top">
      <Navbar />
      <Hero />
      <PortfolioList />
      <About />
      <Contact />
      <Advice />
    </div>
  );
}

export default App;
