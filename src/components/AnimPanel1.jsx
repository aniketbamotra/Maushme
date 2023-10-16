import React, { useEffect, useState } from 'react'
import candle from "../images/candle.png"
import wSphere from "../images/white-sphere.png"
import oSphere from "../images/orange-sphere.png"
import bSphere from "../images/blue-sphere.png"
import reed from "../images/reeddiffuser.png"
import panel1 from "../images/anim-panel-1.png"
import panel2 from "../images/anim-panel-2.png"
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const AnimPanel1 = () => {

    useEffect(() => {
        // Check if ScrollTrigger is available and return if not
        if (!gsap || !ScrollTrigger) return;
    

        // let container = document.querySelector(".slides"),
        // slides = gsap.utils.toArray(".slide"),
        let getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);
    
    // slides.forEach((slide, i) => {
    //   let bg = slide.querySelector(".background"),
    //       content = slide.querySelector(".content"),
    //       tl = gsap.timeline({
    //             scrollTrigger: {
    //               trigger: slide,
    //               start: () => i ? "top bottom" : "top top",
    //               end: "bottom top",
    //               scrub: true,
    //               invalidateOnRefresh: true
    //             }
    //           });
    
// Define the elements
const ele1 = document.querySelector(".slide1");
const ele2 = document.querySelector(".slide2");


const tl = gsap.timeline();

tl.to(ele1, {
  y: () => -ele1.clientHeight, // Move ele-1 up by its height
  ease: 'none', // No easing, to match scroll position
});

ScrollTrigger.create({
  trigger: ele1,
  start: 'top top',
  end: () => `+=${ele1.clientHeight}`, // Adjust the value as needed
  animation: tl,
  scrub: 1,
});

// Set ele-2's position to be fixed during the animation
ScrollTrigger.create({
  trigger: ele2,
  start: 'top top',
  end: 'center top',
  pin: true,
  markers: true, // Add markers for debugging (remove in production)
});
    
    //   tl.fromTo(bg, {
    //       y: () => i ? -window.innerHeight * getRatio(slide) : 0
    //     }, {
    //       y: () => window.innerHeight * (1 - getRatio(slide)),
    //       ease: "none"
    //     });
    //   tl.fromTo(content, {
    //       y: () => i ? window.innerHeight * -getRatio(slide) * 2 : 0
    //     }, {
    //       y: () => window.innerHeight * getRatio(slide) * 2,
    //       ease: "none"
    //     }, 0);


    
      }, []);

      const img1 = {
        backgroundImage: 'url(' + panel1 + ')',
      }
      const img2 = {
        backgroundImage: 'url(' + panel2 + ')',
      }
      const img3 = {
        backgroundImage: "url('https://placedog.net/1920?id=3')",
      }
      const img4 = {
        backgroundImage: "url('https://placedog.net/1920?id=4')",
      }
      const img5 = {
        backgroundImage: "url('https://placedog.net/1920?id=5')",
      }

  return (
    <div className="ani-panel-container col-span-full relative">

<section class="slides">
    <ul class="list">
      <li class="slide slide1 absolute w-screen h-screen -z-0">
        <div class="background w-screen h-screen " style={img1}></div>
        <div class="content">
          SLIDE 1
        </div>
      </li>
      <li class="slide slide2 relative w-screen h-screen -z-10">
        <div class="background w-screen h-screen " style={img2}></div>
        <div class="content">
          SLIDE 2
        </div>
      </li>
    </ul>
  </section>


        {/* <div className="panel-1 panel grid grid-cols-12 h-screen items-center relative py-24">
            <div className="background bg-white w-screen h-screen absolute top-0 left-0"></div>
          <div className="column-1 ani-content content col-start-2 col-end-5 place-self-start">
            <div className="circle-ele w-10 h-10 border-2 border-black rounded-full mb-6"></div>
            <h4 className="body text-2xl font-bold mb-2">Natural scents</h4>
            <p className="heading text-2xl font-light pr-8 mb-10">
              Shop from our wide range of natural scented candles and give your
              home freshness of mother earth.
            </p>
            <div className="cat-btn p-4 border-2 w-max rounded-full">
              <h5 className="body text-base">EXPLOR CANDLES</h5>
            </div>
          </div>
          <div className="ani-image-container content col-start-5 col-end-9 justify-self-center relative">
            <img src={candle} alt="candle" className="absolute z-10" />
            <img src={wSphere} alt="sphere" className=" w-48 relative left-64 " />
            <img src={wSphere} alt="sphere" className=" w-96 relative right-72" />
          </div>
          <div className="column-3 ani-content content col-start-9 col-end-12 place-self-center mt-80">
            <div className="slide-indicator flex gap-4">
              <div className="indicator-circle indicator-circle-1 w-5 h-5 p-1 rounded-full"></div>
              <div className="indicator-circle indicator-circle-2 w-5 h-5 p-1 rounded-full"></div>
            </div>
            <p className="heading mt-1 pr-32">Crafted with finest material to give you the best feeling of having our product.</p>
          </div>

        </div>
        <div className="panel-2 panel grid grid-cols-12 h-screen items-center py-24 relative">
            
        <div className="background bg-black w-screen h-screen absolute top-0 left-0"></div>
          <div className="column-1 ani-content content col-start-2 col-end-5 place-self-start">
            <div className="circle-ele w-10 h-10 border-2 border-white rounded-full mb-6"></div>
            <h4 className="body text-2xl font-bold mb-2 text-white">Natural scents</h4>
            <p className="heading text-2xl font-light pr-8 mb-10 text-white">
              Shop from our wide range of natural scented candles and give your
              home freshness of mother earth.
            </p>
            <div className="cat-btn p-4 border-2 w-max rounded-full">
              <h5 className="body text-base text-white">EXPLOR CANDLES</h5>
            </div>
          </div>
          <div className="ani-image-container content col-start-5 col-end-9 justify-self-center place-self-center relative">
            <img src={reed} alt="candle" className="absolute z-10 reed" />
            <img src={oSphere} alt="sphere" className=" w-48 relative left-64 " />
            <img src={bSphere} alt="sphere" className=" w-96 relative right-72" />
          </div>
          <div className="column-3 content ani-content col-start-9 col-end-12 place-self-center mt-80">
            <div className="slide-indicator flex gap-4">
              <div className="indicator-circle indicator-circle-1 w-5 h-5 p-1 rounded-full"></div>
              <div className="indicator-circle indicator-circle-2 w-5 h-5 p-1 rounded-full"></div>
            </div>
            <p className=" mt-1 pr-32 text-white heading">Crafted with finest material to give you the best feeling of having our product.</p>
          </div>

        </div>         */}
      </div>
  )
}

export default AnimPanel1