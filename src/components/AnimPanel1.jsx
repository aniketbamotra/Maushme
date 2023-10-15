import React from 'react'
import candle from "../images/candle.png"
import wSphere from "../images/white-sphere.png"
import oSphere from "../images/orange-sphere.png"
import bSphere from "../images/blue-sphere.png"
import reed from "../images/reeddiffuser.png"

const AnimPanel1 = () => {
  return (
    <div className="ani-pannel-container col-span-full relative">
        <div className="panel-1 grid grid-cols-12 h-screen items-center py-24">
          <div className="column-1 col-start-2 col-end-5 place-self-start">
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
          <div className="ani-image-container col-start-5 col-end-9 justify-self-center relative">
            <img src={candle} alt="candle" className="absolute z-10" />
            <img src={wSphere} alt="sphere" className=" w-48 relative left-64 " />
            <img src={wSphere} alt="sphere" className=" w-96 relative right-72" />
          </div>
          <div className="column-3 col-start-9 col-end-12 place-self-center mt-80">
            <div className="slide-indicator flex gap-4">
              <div className="indicator-circle indicator-circle-1 w-5 h-5 p-1 rounded-full"></div>
              <div className="indicator-circle indicator-circle-2 w-5 h-5 p-1 rounded-full"></div>
            </div>
            <p className="heading mt-1 pr-32">Crafted with finest material to give you the best feeling of having our product.</p>
          </div>

        </div>
        <div className="panel-2 bg-black grid grid-cols-12 h-screen items-center py-24">
          <div className="column-1 col-start-2 col-end-5 place-self-start">
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
          <div className="ani-image-container col-start-5 col-end-9 justify-self-center place-self-center relative">
            <img src={reed} alt="candle" className="absolute z-10 reed" />
            <img src={oSphere} alt="sphere" className=" w-48 relative left-64 " />
            <img src={bSphere} alt="sphere" className=" w-96 relative right-72" />
          </div>
          <div className="column-3 col-start-9 col-end-12 place-self-center mt-80">
            <div className="slide-indicator flex gap-4">
              <div className="indicator-circle indicator-circle-1 w-5 h-5 p-1 rounded-full"></div>
              <div className="indicator-circle indicator-circle-2 w-5 h-5 p-1 rounded-full"></div>
            </div>
            <p className=" mt-1 pr-32 text-white heading">Crafted with finest material to give you the best feeling of having our product.</p>
          </div>

        </div>        
      </div>
  )
}

export default AnimPanel1