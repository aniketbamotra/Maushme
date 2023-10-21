import React, { useEffect } from "react";
import CollImg1 from "../images/collection1.png";
import CollImg2 from "../images/collection2.png";
import CollImg3 from "../images/collection3.png";
import CollImg4 from "../images/collection4.png";
import CollImg5 from "../images/collection5.png";
import CollSec1 from "../images/collSection1.png";
import CollSec2 from "../images/collSection2.png";
import CollSec3 from "../images/collSection3.png";
import Topbar from "../components/Topbar";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Collections = () => {

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const img1 = document.querySelector(".coll-img-1");
    const img2 = document.querySelector(".coll-img-2");
    const img3 = document.querySelector(".coll-img-3");
    const img4 = document.querySelector(".coll-img-4");
    const img5 = document.querySelector(".coll-img-5");
    const collHero = document.querySelector(".collection-hero-section");

        const  tl = gsap.timeline({
                scrollTrigger: {
                  trigger: collHero,
                  start: "top top",
                  end: "center top",
                  scrub: true,
                  invalidateOnRefresh: true,
                }
              });

              tl.to(img1, {y: '-300px', ease: 'none',});
              tl.to(img3, {y: '-200px', ease: 'none',}, 0);
              tl.to(img4, {y: '100px', ease: 'none',}, 0);

  
    
  }, [])
  

  return (
    <div>
      <Topbar />
      <div className="collection-hero-section">
        <div className="title flex flex-col justify-center items-center mt-24">
          <h6 className="body">COLLECTIONS</h6>
          <h1 className="coll-title heading mt-4 text-7xl text-center">
            Find the perfect candle for you and your loved ones.
          </h1>
        </div>
        <div className="coll-img-wrapper mt-36 flex justify-between items-center">
          <img src={CollImg5} alt="collection image" className="coll-img-1" />
          <img src={CollImg3} alt="collection image" className="coll-img-2" />
          <img src={CollImg2} alt="collection image" className="coll-img-3" />
          <img src={CollImg1} alt="collection image"  className="coll-img-4" />
          <img src={CollImg4} alt="collection image"  className="coll-img-5" />
        </div>
      </div>
      <div className="collection-sections-container">
        <div className="coll-section-1 mt-36 flex justify-between">
          <div className="section-img flex-initial">
            <img src={CollSec1} alt="collection img" />
          </div>
          <div className="section-content flex-1 pl-36">
            <h6 className="body mb-8">COLLECTION</h6>
            <h6 className="heading text-7xl mb-8">AN ODE TO EMOTION</h6>
            <p className="body mb-8 pr-48">
              A collaboration with artist Rebecca Campbell, the symbolic fantasy
              of our Pomegranates & Roses collection evokes paradise gardens
              along the Bosporus. Exquisite fine china with 24 carat gold
              highlights.
            </p>
            <div className="badge w-max px-2 py-1 mb-8">CANDLES</div>
            <a
              href="#"
              className="vcb body font-semibold text-white bg-black px-6 py-3"
            >
              View Collection
            </a>
          </div>
        </div>
        <div className="coll-section-2 mt-36 flex justify-between">
          <div className="section-img flex-initial">
            <img src={CollSec3} alt="collection img" />
          </div>
          <div className="section-content flex-1 pl-36">
            <h6 className="body mb-8">COLLECTION</h6>
            <h6 className="heading text-7xl mb-8">Around You</h6>
            <p className="body mb-8 pr-48">
              A collaboration with artist Rebecca Campbell, the symbolic fantasy
              of our Pomegranates & Roses collection evokes paradise gardens
              along the Bosporus. Exquisite fine china with 24 carat gold
              highlights.
            </p>
            <div className="badge w-max px-2 py-1 mb-8 inline-block mr-10">REED DIFFUSERS</div>
            <div className="badge w-max px-2 py-1 mb-8 inline-block">CANDLES</div>
            <a
              href="#"
              className="vcb body font-semibold text-white bg-black block w-max px-6 py-3"
            >
              View Collection
            </a>
          </div>
          <div className="section-img flex-initial">
            <img src={CollSec2} alt="collection img" />
          </div>
        </div>
        <div className="coll-section-3 mt-36 flex justify-between">
          <div className="section-content flex-1 pl-36">
            <h6 className="body mb-8">COLLECTION</h6>
            <h6 className="heading text-7xl mb-8">A SPLASH OF COURAGE</h6>
            <p className="body mb-8 pr-48">
              A collaboration with artist Rebecca Campbell, the symbolic fantasy
              of our Pomegranates & Roses collection evokes paradise gardens
              along the Bosporus. Exquisite fine china with 24 carat gold
              highlights.
            </p>
            <div className="badge w-max px-2 py-1 mb-8 inline-block mr-10">REED DIFFUSERS</div>
            <div className="badge w-max px-2 py-1 mb-8 inline-block">CANDLES</div>
            <a
              href="#"
              className="vcb block w-max body font-semibold text-white bg-black px-6 py-3"
            >
              View Collection
            </a>
          </div>
          <div className="section-img flex-initial">
            <img src={CollSec1} alt="collection img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
