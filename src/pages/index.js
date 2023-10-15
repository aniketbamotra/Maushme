import * as React from "react";
import Topbar from "../components/Topbar";
import heroVid from "../static/video/hero-vid.mp4";
import AnimPanel1 from "../components/AnimPanel1";
import Bestsellers from "../components/Bestsellers";
import About from "../components/About";

const IndexPage = () => {
  return (
    <main className="grid grid-cols-12">
      <Topbar />
      <div className="hero-section col-span-full relative mb-20">
        <video src={heroVid} autoPlay loop muted className="relative -z-10" />
        <h1 className="hero-text heading z-10 absolute top-28 px-36 left-1/2 -translate-x-2/4 text-6xl text-white text-center">
          Discover our wide range of home décor products crafted with finest
          materials.
        </h1>
      </div>
      <h3 className=" col-start-4 col-end-10 px-10 heading text-3xl text-center mb-44">
        Crafted with love and perfection to give your home a touch of nature and
        relaxation.
      </h3>
      <AnimPanel1 />
      <Bestsellers />
      <About />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Maushme</title>;
