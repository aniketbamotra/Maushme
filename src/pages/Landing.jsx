import React from "react";
import Topbar from "../components/Topbar";
import heroVideo from "../static/video/hero-video.mp4";
import heroImg from "../images/landing-hero-img.jpg";
import AnimPanel1 from "../components/AnimPanel1";
import Bestsellers from "../components/Bestsellers";
import About from "../components/About";
import SmoothScrollComp from "../components/SmoothScrollComp";
import BottomBar from "../components/BottomBar";

const Landing = () => {
  return (
    <div className="grid grid-cols-12">
      <Topbar />
      <div className="hero-section col-span-full relative h-screen mb-20">
        <img src={heroImg} className="relative w-screen h-screen object-cover -z-10" />
        <h1 className="hero-text heading z-10 absolute top-1/4 px-0 2xl:px-36 left-1/2 -translate-x-2/4 text-2xl md:text-4xl xl:text-5xl text-white text-center">
        The place from where Extra Ordinary flows out. 
        </h1>
      </div>
      <h3 className=" col-start-2 col-end-12 text-2xl xl:col-start-4 xl:col-end-10 xl:text-4xl heading text-center mb-44">
        Crafted with love and perfection to give your home a touch of nature and
        relaxation.
      </h3>
        <AnimPanel1 />
      <Bestsellers />
      <About />
      <BottomBar />
    </div>
  );
};

export default Landing;
