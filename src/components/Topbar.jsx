import React, { useState } from "react";
import DarkLogo from "../images/dark-logo.png";
import accSvg from "../images/account.svg";
import cartSvg from "../images/cart.svg";
import wishSvg from "../images/wishlist.svg";
import menuIcon from "../images/menu.png";

const Topbar = () => {
    const [MenuToggle, setMenuToggle] = useState(false);

    const mobileMenuToggle = () => {
        const menu = document.querySelector(".mobile-menu");
        setMenuToggle(!MenuToggle);
    }


  return (
    <div className="flex justify-between items-center lg:px-14 lg:py-4 px-4 py-4 col-span-full">
      <div className="logo-wrapper min-w-fit">
        <img src={DarkLogo} alt="" srcset="" />
      </div>
      <div className="menu-list wide-screen-menu ">
        <ul className="flex gap-9 text-base body">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://maushme.shop/">Shop</a>
          </li>
          <li>
            <a href="/Collections">Collections</a>
          </li>
          <li>
            <a href="https://maushme.shop/?page_id=6773">Giftings</a>
          </li>
          <li>
            <a href="https://maushme.shop/?page_id=6792">About Us</a>
          </li>
        </ul>
      </div>
      <div className={`${"mobile-menu absolute top-0 left-0 z-20 h-screen w-screen"} ${MenuToggle ? "mobile-open" : "mobile-close"}`}>
        <div className="mobile-menu-bg h-screen w-screen bg-black opacity-50 absolute" onClick={() => setMenuToggle(false)} ></div>
        <div className="menu-list top-0 left-0 h-screen w-11/12 bg-white flex flex-col relative z-10">
        <div className="logo-wrapper py-4 self-center">
          <img src={DarkLogo} alt="" srcset="" />
        </div>
        <ul className="flex flex-col gap-9 text-base body pl-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://maushme.shop/">Shop</a>
          </li>
          <li>
            <a href="/Collections">Collections</a>
          </li>
          <li>
            <a href="https://maushme.shop/?page_id=6773">Giftings</a>
          </li>
          <li>
            <a href="https://maushme.shop/?page_id=6792">About Us</a>
          </li>
        </ul>
      </div>
      </div>
      <div className="top-icon">
        <ul className="flex lg:gap-9 gap-2 text-base body">
          <li><a href="https://maushme.shop/?page_id=9"><img src={accSvg} /></a></li>
          <li><a href="https://maushme.shop/?page_id=11"><img src={wishSvg} /></a></li>
          <li><a href="https://maushme.shop/?page_id=6339"><img src={cartSvg} /></a></li>
          <li onClick={mobileMenuToggle} className="mobile-menu-trigger" ><img src={menuIcon} alt="" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
