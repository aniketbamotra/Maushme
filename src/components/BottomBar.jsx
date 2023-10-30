import React from "react";
import lLogo from "../images/light-logo.png"

const BottomBar = () => {
  return (
    <div className="bg-black w-screen py-36 2xl:px-80 xl:px-60 px-20 mt-20">
        <div className="ft-logo  w-full justify-center items-center lg:hidden flex mb-24">
            <img src={lLogo} alt="Logo" className="w-60 object-contain" />
        </div>
      <div className="footer-links-container flex xl:gap-16 gap-8 lg:flex-nowrap flex-wrap justify-center">
        <div className="ft-col w-1/2">
            <h4 className="body text-white mb-3 font-semibold lg:text-left text-center">MENU</h4>
          <ul>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Home</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Shop</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Collection</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Gifts</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Popular this week</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">All products</a></li>
          </ul>
        </div>
        <div className="ft-col w-1/2">
            <h4 className="body text-white mb-3 font-semibold lg:text-left text-center">CATEGORIES</h4>
          <ul>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Candles</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Diffusers</a></li>
          </ul>
        </div>
        <div className="ft-col w-1/2">
            <h4 className="body text-white mb-3 font-semibold lg:text-left text-center">OUR COMPANY</h4>
          <ul>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">About Us</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Contact Us</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Privacy</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="#">Return Policy</a></li>
          </ul>
        </div>
        <div className="ft-logo  w-full justify-end items-start lg:flex hidden">
            <img src={lLogo} alt="Logo" className="w-60 object-contain" />
        </div>
      </div>
      <div className="copy-container mt-40">
        <h5 className="body text-white">Copyright 2023 MAUSHME LTD</h5>
        <div className="social-icons">
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
