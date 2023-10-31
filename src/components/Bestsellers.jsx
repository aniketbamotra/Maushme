import React from "react";
import ProductCard from "./ProductCard";

const Bestsellers = () => {
  return (
    <div className=" mt-32 2xl:px-36 md:px-16 px-8 col-span-full">
      <div className="product-top md:flex justify-between mb-16 ">
        <div className="section-title">
          <h5 className="body xl:font-bold font-normal text-sm mb-4">OUR SHOP</h5>
          <h3 className="heading font-light xl:text-4xl text-2xl mb-4">
            Here are the bestsellers from <br /> our collection
          </h3>
        </div>
        <h5 className="view-all-link body font-bold text-base underline"><a href="https://maushme.shop/">View All</a></h5>
      </div>
      <div className="product-row">
        <ProductCard />
      </div>
    </div>
  );
};

export default Bestsellers;
