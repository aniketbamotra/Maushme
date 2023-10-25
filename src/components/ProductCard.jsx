import React from "react";
import prodImg1 from "../images/product1.png";
import prodImg2 from "../images/product2.png";
import prodImg3 from "../images/product3.png";
import prodImg4 from "../images/product4.png";
import star from "../images/magic-star.png";

const ProductCard = () => {
  return (
    <div className="product-cards mb-60 flex lg:justify-between justify-around items-center lg:flex-nowrap lg:gap-0 flex-wrap gap-16">
      <div className="card-1 w-max">
        <img src={prodImg1} alt="prod-img" className=" 2xl:w-80 xl:w-72 md:w-52 w-72" />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            versace dylan blue
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">100ML</div>
        <div className="body font-medium text-xs mb-5">for men - cold fragrance - Fern - <br /> grapefruit - wood - bergamot</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold xl:text-2xl text-base">$107.00</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium xl:py-3 py-1 xl:px-6 px-3 rounded-full">Add To Cart</div>
        </div>
      </div>
      <div className="card-1 w-max">
        <img src={prodImg2} alt="prod-img" className=" 2xl:w-80 xl:w-72 md:w-52 w-72"  />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            versace dylan blue
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">100ML</div>
        <div className="body font-medium text-xs mb-5">for men - cold fragrance - Fern - <br /> grapefruit - wood - bergamot</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold xl:text-2xl text-base">$107.00</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium xl:py-3 py-1 xl:px-6 px-3 rounded-full">Add To Cart</div>
        </div>
      </div>
      <div className="card-1 w-max">
        <img src={prodImg3} alt="prod-img" className=" 2xl:w-80 xl:w-72 md:w-52 w-72" />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            versace dylan blue
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">100ML</div>
        <div className="body font-medium text-xs mb-5">for men - cold fragrance - Fern - <br /> grapefruit - wood - bergamot</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold xl:text-2xl text-base">$107.00</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium xl:py-3 py-1 xl:px-6 px-3 rounded-full">Add To Cart</div>
        </div>
      </div>
      <div className="card-1 w-max">
        <img src={prodImg4} alt="prod-img" className=" 2xl:w-80 xl:w-72 md:w-52 w-72" />
        <div className="flex justify-between">
          <h5 className="prod-title body xl:text-xl text-base font-bold">
            versace dylan blue
          </h5>
          <div className="rating flex justify-center items-center">
            <img src={star} alt="rating" />
            <span className="body text-xs font-medium">4.5</span>
          </div>
        </div>
        <div className="body text-xs text-blue-800 font-medium">100ML</div>
        <div className="body font-medium text-xs mb-5">for men - cold fragrance - Fern - <br /> grapefruit - wood - bergamot</div>
        <div className="price-wrapper flex justify-between items-center">
            <h3 className="price body font-semibold xl:text-2xl text-base">$107.00</h3>
            <div className="atc-btn body xl:text-base text-sm font-medium xl:py-3 py-1 xl:px-6 px-3 rounded-full">Add To Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
