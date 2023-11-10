import React from "react";
import prodImg1 from "../images/product1.png";
import prodImg2 from "../images/product2.png";
import prodImg3 from "../images/product3.png";
import prodImg4 from "../images/product4.png";
import bsImg1 from "../images/bs1.png";
import bsImg2 from "../images/bs2.png";
import bsImg3 from "../images/bs3.png";
import bsImg4 from "../images/bs4.png";
import star from "../images/magic-star.png";

const ProductCard = () => {
  return (
    <div className="product-cards mb-60 flex lg:justify-between justify-around items-center lg:flex-nowrap lg:gap-0 flex-wrap gap-16">
      <div className="card-1 w-max">
        <img src={bsImg1} alt="prod-img" className=" 2xl:w-80 xl:w-64 md:w-52 w-72" />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            Walk on Air
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">230GM</div>
        <div className="body font-medium text-xs mb-5">Jasmine Musk</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold 2xl:text-2xl xl:text-xl text-base"><span>&#8377;</span>800</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium 2xl:py-3 py-1 2xl:px-6 xl:px-4 px-3 rounded-full"><a href="https://shop.maushme.com/?product=walk-on-air">View Details</a></div>
        </div>
      </div>
      <div className="card-1 w-max">
        <img src={bsImg2} alt="prod-img" className=" 2xl:w-80 xl:w-64 md:w-52 w-72"  />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            A Forest Breeze
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">230GM</div>
        <div className="body font-medium text-xs mb-5">Vanilla Sandalwood</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold 2xl:text-2xl xl:text-xl text-base"><span>&#8377;</span>800</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium 2xl:py-3 py-1 2xl:px-6 xl:px-4 px-3 rounded-full"><a href="https://shop.maushme.com/?product=a-forest-breeze">View Details</a></div>
        </div>
      </div>
      <div className="card-1 w-max">
        <img src={bsImg3} alt="prod-img" className=" 2xl:w-80 xl:w-64 md:w-52 w-72" />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            Barnyard
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">350GM</div>
        <div className="body font-medium text-xs mb-5">Oudh Honey Truffle</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold 2xl:text-2xl xl:text-xl text-base"><span>&#8377;</span>1500</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium 2xl:py-3 py-1 2xl:px-6 xl:px-4 px-3 rounded-full"><a href="https://shop.maushme.com/?product=barnyard">View Details</a></div>
        </div>
      </div>
      <div className="card-1 w-max">
        <img src={bsImg4} alt="prod-img" className=" 2xl:w-80 xl:w-64 md:w-52 w-72" />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            Spirit of Life
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">100ML</div>
        <div className="body font-medium text-xs mb-5">Oudh Patchouli</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold 2xl:text-2xl xl:text-xl text-base"><span>&#8377;</span>1200</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium 2xl:py-3 py-1 2xl:px-6 xl:px-4 px-3 rounded-full"><a href="https://shop.maushme.com/?product=spirit-of-life-2">View Details</a></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
