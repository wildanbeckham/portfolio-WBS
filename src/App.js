import React from "react"
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import PortfolioList from "./component/PortofolioList";
import About from "./component/About";

function App() {
  return (
    <div className="page-top">
      <Navbar />
      <Hero />
      <PortfolioList />
      <About />
    </div>
  );
}

export default App;
