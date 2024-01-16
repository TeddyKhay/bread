import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import NewBreads from "./NewBreads";
import About from "./About";
import BreadGroup from "./BreadGroup";
import VisitLocation from "./VisitLocation";
import FooterBread from "./FooterBread";
import FooterCopy from "./FooterCopy";

const App = () => {
  return (
    <div>
    <Navbar />
    <HeroSection/>
    <NewBreads/>
    <About/>
    <BreadGroup/>
    <VisitLocation/>
    <FooterBread/>
    <FooterCopy/>
    </div>

  );
};

export default App;
