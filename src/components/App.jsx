import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import BreadGroup from "./BreadGroup";
import VisitLocation from "./VisitLocation";
import FooterBread from "./FooterBread";
import FooterCopy from "./FooterCopy";
import NewBreadsGp from "./NewBreadsGp";

const App = () => {
  return (
    <div className="">
    <Navbar/>
    <HeroSection/>
    <NewBreadsGp/>
    <About/>
    <BreadGroup/>
    <VisitLocation/>
    <FooterBread/>
    <FooterCopy/>
    </div>

  );
};

export default App;
