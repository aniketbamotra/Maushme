import * as React from "react";
import Topbar from "../components/Topbar";
import heroVid from "../static/video/hero-vid.mp4";
import AnimPanel1 from "../components/AnimPanel1";
import heroImg from "../images/landing-hero-img.jpg";
import Bestsellers from "../components/Bestsellers";
import About from "../components/About";
import lightLogo from "../images/light-logo.png"
import comimgImg from "../images/coming.png"
import staticBg from "../images/static-bg.jpg"
import BottomBar from "../components/BottomBar";

const IndexPage = () => {
  return (
    <main className="grid grid-cols-12 overflow-hidden">
      {/* <Topbar />
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
      <BottomBar /> */}

      <img src={staticBg} alt="" className="static-bg absolute w-screen h-screen blur-sm top-0 left-0 object-cover" />
      <div className="bg-overlay w-screen h-screen bg-black absolute top-0 left-0 opacity-50"></div>
      <div className="flex justify-center items-center relative top-0 left-0 w-screen h-screen">
        <div className="static-content flex flex-col justify-center items-center gap-8">
          <img src={lightLogo} className="logo-white w-60"></img>
          <h1 className="heading font-bold text-white text-4xl text-center">COMING SOON</h1>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Maushme</title>;
