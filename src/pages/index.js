import * as React from "react";
import Topbar from "../components/Topbar";
import heroVid from "../static/video/hero-vid.mp4";
import AnimPanel1 from "../components/AnimPanel1";
import Bestsellers from "../components/Bestsellers";
import About from "../components/About";
import lightLogo from "../images/light-logo.png"

const IndexPage = () => {
  return (
    <main className="grid grid-cols-12">
      {/* <Topbar /> */}
      <div className="hero-section col-span-full relative">
        <video src={heroVid} onPause loop muted className="relative -z-10 h-screen w-screen md:object-cover object-right object-fill" />
        <div className="z-10 absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={lightLogo} alt="logo" className=" " />
        <h1 className="hero-text heading md:text-4xl text-3xl  text-white text-center">
          Coming Soon!
        </h1>
        </div>
      </div>
      {/* <h3 className=" col-start-4 col-end-10 px-10 heading text-3xl text-center mb-44">
        Crafted with love and perfection to give your home a touch of nature and
        relaxation.
      </h3>
      <AnimPanel1 />
      <Bestsellers />
      <About /> */}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Maushme</title>;
