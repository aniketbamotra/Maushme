import React from "react";
import ProductCard from "./ProductCard";

const Bestsellers = () => {
  return (
    <div className=" mt-32 px-36 col-span-full">
      <div className="product-top flex justify-between mb-16">
        <div className="section-title">
          <h5 className="body font-bold text-sm mb-1">OUR SHOP</h5>
          <h3 className="heading font-light text-4xl">
            Here are the bestsellers from <br /> our collection
          </h3>
        </div>
        <h5 className="view-all-link body font-bold text-base underline"><a href="">View All</a></h5>
      </div>
      <div className="product-row">
        <ProductCard />
      </div>
    </div>
  );
};

export default Bestsellers;
