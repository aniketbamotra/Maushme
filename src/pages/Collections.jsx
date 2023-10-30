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
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import BottomBar from "../components/BottomBar";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const Collections = () => {
  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const img1 = document.querySelector(".coll-img-1");
    const img3 = document.querySelector(".coll-img-3");
    const img4 = document.querySelector(".coll-img-4");
    const collHero = document.querySelector(".collection-hero-section");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: collHero,
        start: "top top",
        end: "center top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(img1, { y: "-300px", ease: "none" });
    tl.to(img3, { y: "-200px", ease: "none" }, 0);
    tl.to(img4, { y: "100px", ease: "none" }, 0);

    const sphereAnimTrig = document.querySelector(".sphere-ani-container");
    const sphereAnim = document.querySelector(".ani-sphere");
    const sphereAnimPath = document.querySelector(".ani-path");
    const sphereColor = document.querySelector(".sphere-color");
    const sphereColor1 = document.querySelector(".sphere-color1");
    const sphereColor2 = document.querySelector(".sphere-color2");
    const sphereColor3 = document.querySelector(".sphere-color3");

    const sphereTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sphereAnimTrig,
          scrub: 0.5,
          start: "-30% top",
          end: "290% top",
        },
      })
      .to(sphereAnim, {
        motionPath: {
          path: sphereAnimPath,
          align: sphereAnimPath,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
      });

    const sphereColorTl1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sphereAnimTrig,
          scrub: 0.5,
          start: "-30% top",
          end: "100% top",
        },
      })
      .to(sphereAnim, { scale: 3 / 4 }, 0)
      .to(sphereColor, { fill: "#F9F7B2" }, 0)
      .to(sphereColor1, { fill: "#EFAA86" }, 0)
      .to(sphereColor2, { fill: "#DDFAEE" }, 0)
      .to(sphereColor3, { fill: "#F4DACB" }, 0);

    const sphereColorTl2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sphereAnimTrig,
          scrub: 0.5,
          start: "100% top",
          end: "220% top",
        },
      })
      .to(sphereColor, { fill: "#F9BEB2" }, 0)
      .to(sphereColor1, { fill: "#EF9786" }, 0)
      .to(sphereColor2, { fill: "#F8BDB1" }, 0)
      .to(sphereColor3, { fill: "#F8BDB1" }, 0);

    const sphereColorTl3 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sphereAnimTrig,
          scrub: 0.5,
          start: "220% top",
          end: "290% top",
        },
      })
      .to(sphereColor, { fill: "#B2F9C6" }, 0)
      .to(sphereColor1, { fill: "#F2F9AC" }, 0)
      .to(sphereColor2, { fill: "#DDFAF0" }, 0)
      .to(sphereColor3, { fill: "#CBF2F4" }, 0);

    // .to(sphereColor, { fill: "#F9F7B2", progress: 0.1 }, 0).to(sphereColor2, { fill: "#EFAA86", progress: 0.1 });
    // .to(sphereColor, { fill: "#F9BEB2", progress: 0.3 }, 0).to(sphereColor2, { fill: "#EF9786", progress: 0.3 }, 0);
  }, []);

  return (
    <div>
      <Topbar />
      {/* <div className="sphere-ani-container absolute -z-10 top-1/4 left-1/4 h-full">
        <div className="ani-sphere-wrapper relative top-1/4 left-1/4 -z-10 ">
          <svg
            className="ani-sphere"
            width="254"
            height="260"
            viewBox="0 0 254 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_170_2428)">
              <rect
                width="253.977"
                height="260"
                rx="126.988"
                className="sphere-color"
                fill="#F9B2E0"
              />
              <g filter="url(#filter0_f_170_2428)">
                <ellipse
                  className="sphere-color1"
                  cx="121.569"
                  cy="112.976"
                  rx="132.409"
                  ry="133.095"
                  fill="#C3B3D9"
                />
              </g>
              <g opacity="0.7" filter="url(#filter1_f_170_2428)">
                <ellipse
                  className="sphere-color2"
                  cx="102.209"
                  cy="80.4759"
                  rx="75.8833"
                  ry="75.8333"
                  fill="#E7F7FE"
                />
              </g>
              <g filter="url(#filter2_f_170_2428)">
                <ellipse
                  className="sphere-color3"
                  cx="36.1094"
                  cy="22.0804"
                  rx="36.1094"
                  ry="22.0804"
                  transform="matrix(0.981154 -0.193229 0.191881 0.981418 107.939 210.229)"
                  fill="#F4DACB"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_170_2428"
                x="-70.8398"
                y="-80.1191"
                width="384.816"
                height="386.191"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="30"
                  result="effect1_foregroundBlur_170_2428"
                />
              </filter>
              <filter
                id="filter1_f_170_2428"
                x="-23.6738"
                y="-45.3574"
                width="251.768"
                height="251.666"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="25"
                  result="effect1_foregroundBlur_170_2428"
                />
              </filter>
              <filter
                id="filter2_f_170_2428"
                x="81.9199"
                y="172.148"
                width="131.369"
                height="105.545"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="15"
                  result="effect1_foregroundBlur_170_2428"
                />
              </filter>
              <clipPath id="clip0_170_2428">
                <rect width="253.977" height="260" rx="126.988" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <svg
          className="ani-path-wrapper absolute -z-20 top-0 left-0 opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          width="1078"
          height="3480"
          viewBox="0 0 1078 3480"
          fill="none"
        >
          <path
            d="M27 1L1077 1417L513 2437L1 3479"
            stroke="black"
            className="ani-path"
          />
        </svg>
      </div> */}
      <div className="coll-grid grid grid-cols-12 gap-16">
        <div className="collection-hero-section lg:col-start-4 md:col-start-3 col-start-2 lg:col-end-10 md:col-end-11 col-end-11">
          <div className="title flex flex-col justify-center items-center mt-24">
            <h6 className="body">COLLECTIONS</h6>
            <h1 className="coll-title heading mt-4 xl:text-7xl sm:text-5xl text-3xl text-center">
              Find the perfect candle for you and your loved ones.
            </h1>
          </div>
        </div>
        <div className="coll-img-wrapper mt-36 justify-between items-center col-span-full lg:flex hidden">
            <img src={CollImg5} alt="collection image" className="coll-img-1" />
            <img src={CollImg3} alt="collection image" className="coll-img-2 2xl:block hidden" />
            <img src={CollImg2} alt="collection image" className="coll-img-3 xl:block hidden" />
            <img src={CollImg1} alt="collection image" className="coll-img-4" />
            <img src={CollImg4} alt="collection image" className="coll-img-5" />
          </div>
          <div className="section-img flex-initial lg:col-start-1 md:col-start-2 col-start-1 lg:col-end-8 col-end-12 mt-36">
              <img src={CollSec1} alt="collection img" />
            </div>
            <div className="section-content lg:col-start-8 col-start-2 lg:col-end-13 col-end-12 pr-8 lg:mt-36 mt-4">
              <h6 className="body xl:mb-8 mb-4">COLLECTION</h6>
              <h6 className="heading xl:text-7xl text-4xl xl:mb-8 mb-4">AN ODE TO EMOTION</h6>
              <p className="body xl:mb-8 mb-4">
                A collaboration with artist Rebecca Campbell, the symbolic
                fantasy of our Pomegranates & Roses collection evokes paradise
                gardens along the Bosporus. Exquisite fine china with 24 carat
                gold highlights.
              </p>
              <div className="badge w-max px-2 py-1 mb-8">CANDLES</div>
              <a
                href="#"
                className="vcb body font-semibold text-white bg-black px-6 py-3"
              >
                View Collection
              </a>
            </div>
            <div className="section-img lg:col-start-1 md:col-start-2 col-start-1 lg:col-end-5 col-end-12 mt-36">
              <img src={CollSec3} alt="collection img" className=" object-cover" />
            </div>
            <div className="section-content lg:col-start-5 col-start-2 lg:col-end-9 col-end-12 lg:mt-36 mt-4">
              <h6 className="body mb-8">COLLECTION</h6>
              <h6 className="heading xl:text-7xl text-4xl xl:mb-8 mb-4">Around You</h6>
              <p className="body mb-8">
                A collaboration with artist Rebecca Campbell, the symbolic
                fantasy of our Pomegranates & Roses collection evokes paradise
                gardens along the Bosporus. Exquisite fine china with 24 carat
                gold highlights.
              </p>
              <div className="badge w-max px-2 py-1 mb-8 inline-block mr-10">
                REED DIFFUSERS
              </div>
              <div className="badge w-max px-2 py-1 mb-8 inline-block">
                CANDLES
              </div>
              <a
                href="#"
                className="vcb body font-semibold text-white bg-black block w-max px-6 py-3"
              >
                View Collection
              </a>
            </div>
            <div className="section-img lg:col-start-9 lg:col-end-13 md:col-start-2 col-start-1 col-end-12 place-self-center mt-36">
              <img src={CollSec2} alt="collection img" className=" object-cover" />
            </div>
            <div className="section-content lg:col-start-2 col-start-2 lg:col-end-6 col-end-12 lg:mt-36 mt-4">
              <h6 className="body mb-8">COLLECTION</h6>
              <h6 className="heading xl:text-7xl text-4xl xl:mb-8 mb-4">A SPLASH OF COURAGE</h6>
              <p className="body mb-8">
                A collaboration with artist Rebecca Campbell, the symbolic
                fantasy of our Pomegranates & Roses collection evokes paradise
                gardens along the Bosporus. Exquisite fine china with 24 carat
                gold highlights.
              </p>
              <div className="badge w-max px-2 py-1 mb-8 inline-block mr-10">
                REED DIFFUSERS
              </div>
              <div className="badge w-max px-2 py-1 mb-8 inline-block">
                CANDLES
              </div>
              <a
                href="#"
                className="vcb block w-max body font-semibold text-white bg-black px-6 py-3"
              >
                View Collection
              </a>
            </div>
            <div className="section-img lg:col-start-6 lg:col-end-13 lg:block hidden mt-36">
              <img src={CollSec1} alt="collection img" />
            </div>

      </div>
      <BottomBar />
    </div>
  );
};

export default Collections;
