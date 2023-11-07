import React from "react";
import lLogo from "../images/light-logo.png"
import fb from "../images/Facebook.png"
import insta from "../images/Instagram.png"

const BottomBar = () => {
  return (
    <div className="bg-black w-screen py-36 2xl:px-80 xl:px-60 px-20 mt-20">
        <div className="ft-logo  w-full justify-center items-center lg:hidden flex mb-24">
            <img src={lLogo} alt="Logo" className="w-60 object-contain" />
        </div>
      <div className="ft-wrapper flex justify-center md:justify-between flex-wrap gap-4">
        <div className="social-wrapper">
        <h4 className="body text-white mb-3 font-semibold text-center">SOCIAL</h4>
          <ul className="flex">
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://www.facebook.com/Maushmeee?mibextid=LQQJ4d"><img src={fb} alt="" /></a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://www.instagram.com/maushme/"><img src={insta} alt="" /></a></li>
          </ul>
        </div>
      <div className="footer-links-container flex xl:gap-16 gap-8 lg:flex-nowrap flex-wrap justify-center">
        <div className="ft-col w-1/2">
            <h4 className="body text-white mb-3 font-semibold lg:text-left text-center">MENU</h4>
          <ul>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="/">HOME</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/">SHOP</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="/Collections">COLLECTIONS</a></li>
          </ul>
        </div>
        <div className="ft-col w-1/2">
            <h4 className="body text-white mb-3 font-semibold lg:text-left text-center">SUPPORT</h4>
          <ul>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6792">ABOUT US</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6908">CONTACT US</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=7024">BULK ORDER</a></li>
          </ul>
        </div>
        <div className="ft-col w-1/2">
            <h4 className="body text-white mb-3 font-semibold lg:text-left text-center">POLICIES</h4>
          <ul>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6913">PRIVACY POLICY</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6919">SHIPPING POLICY</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6924">RETURN POLICY</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6929">REFUND POLICY</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6934">DISCLAIMER POLICY</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6939">CANCELLATION POLICY</a></li>
            <li className="body text-white mb-3 font-light lg:text-left text-center"><a href="https://shop.maushme.com/?page_id=6944">TERMS OF USE</a></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="copy-container mt-40 flex flex-wrap md:justify-between justify-center">
        <h5 className="body text-white">Powered by BuildEZ</h5>
        <h5 className="body text-white md:text-right text-center"><span>&#169;</span>
2023 BuildEz Consumer Private Limited. All right reserved </h5>
      </div>
    </div>
  );
};

export default BottomBar;
