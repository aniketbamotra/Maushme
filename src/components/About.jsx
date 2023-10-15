import React from "react";
import creatorBg from "../images/creator-bg.png"
import creator from "../images/creator.png"
import review1 from "../images/review1.png"
import review2 from "../images/review2.png"
import rating from "../images/Review Star's.png"
import subs from "../images/subs-bg.png"

const About = () => {
  return (
    <div className="about-review-subs col-span-full">
      <div className="about-wrapper flex justify-between">
        <div className="content ml-32 mt-14 flex-1">
          <h6 className="body text-sm font-semibold">ABOUT US</h6>
          <h3 className="heading text-4xl mt-7">
            {" "}
            The story for our brand and its <br />
            purpose.
          </h3>
          <p className="body text-base pr-64 py-14">
            Interior designer Sarah Vaile remembers eyeing a New York City
            apartment—one with bold colors and a personality as distinct as its
            chic owner—in a 2014 issue of House Beautiful, and tucking it away
            for future design inspiration. Years later, in a serendipitous turn
            of events, the woman she’d seen in the magazine—a stylish figure now
            in her 30s—just moved to Chicago.
          </p>
          <div className="btn-container flex gap-6">
            <div className="atc-btn w-max body text-base font-medium py-3 px-6 rounded-full">
              Our Blog
            </div>
            <div className="atc-btn w-max body text-base font-medium py-3 px-6 rounded-full">
              Instagram
            </div>
          </div>
        </div>
        <div className="img-wrapper flex-1 relative">
            <img src={creatorBg} alt="creatorBg" className=" pl-28" />
            <img src={creator} alt="creator" className="absolute creator-img" />
            <h5 className="body pl-80 text-sm mt-14" >OUR CREATOR</h5>
            <h3 className="body pl-80 font-bold text-xl" >ANNA SMITH</h3>
        </div>
      </div>
      <div className="review-wrapper flex justify-between mt-32">
        <div className="img-wrapper flex-1 relative flex">
            <img src={review1} alt="review1" className=" ml-20" />
            <img src={review2} alt="review2" className="" />
        </div>
        <div className="content ml-32 mt-14 flex-1">
          <h6 className="body text-sm font-semibold">REVIEWS</h6>
          <h3 className="heading text-4xl mt-7">We adore all our friends at Maushme, especially the beauties who have come to live with us!
          </h3>
          <p className="body text-base pr-40 py-14">
          Interior designer Sarah Vaile remembers eyeing a New York City apartment—one with bold colors and a personality as distinct as its chic owner—in a 2014 issue of House Beautiful, and tucking it away for future design inspiration. Years later, in a serendipitous turn of events, the woman she’d seen in the magazine—a stylish figure now in her 30s—just moved to Chicago.
          </p>
          <div className="rating flex gap-4">
            <img src={rating} alt="rating" />
            <h5 className="body text-base font-semibold">5/5</h5>
          </div>
          <h3 className="heading text-2xl mt-6">Pamela S.</h3>
          <h6 className="body text-base">Lake Forest, CA</h6>
        </div>
      </div>
      <div className="subs-container mt-64 relative">
        <img src={subs} alt="sub-bg" className="absolute -z-10 pl-20" />
        <div className="sub-content pl-40 flex justify-between items-center pt-44">
        <h2 className="sub-title heading text-white font-light text-6xl flex-1">Subscribe to our newsletter for regular updates</h2>
        <div className="subs-input flex-1">
            <input type="email" name="email" id="email" placeholder="your@email.com" className=" w-8/12 py-4 px-8 opacity-60 body" />
            <button className=" bg-white px-6 py-4 rounded-full body" >Sign Up</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
