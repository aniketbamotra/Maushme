import React from "react";
import creatorBg from "../images/creator-bg.png";
import creator from "../images/creator.png";
import review1 from "../images/review1.png";
import review2 from "../images/review2.png";
import rating from "../images/Review Star's.png";
import subs from "../images/subs-bg.png";

const About = () => {
  return (
    <div className="about-review-subs col-span-full">
      <div className="about-wrapper flex justify-center lg:flex-nowrap lg:gap-0 gap-20 flex-wrap 2xl:pl-32 xl:px-20 md:px-10 px-8">
        <div className="content  lg:mt-14 lg:flex-1">
          <h6 className="body text-sm font-semibold">ABOUT US</h6>
          <h3 className="heading xl:text-4xl md:text-3xl text-2xl mt-7">
            {" "}
            The story for our brand and its <br />
            purpose.
          </h3>
          <p className="body text-base 2xl:pr-64 md:pr-20 md:py-14 py-10">
            Guneet Virdi, creator of Maushme, gained renown in the MUA
            community. Now, with Maushme, she extends her expertise to inner
            well-being. Drawing from a decade of experience, she crafts products
            to elevate self-care, emphasizing the importance of nurturing our
            inner selves for our best versions.
          </p>
          <div className="btn-container flex gap-6">
            <a href="https://maushme.shop/?page_id=6954" className="h-max atc-btn rounded-full w-max body xl:text-base text-sm font-medium xl:py-3 py-1 xl:px-6 px-3">
              Our Blog
            </a>
            <a href="https://www.instagram.com/maushme/" className="atc-btn w-max h-max body xl:text-base text-sm font-medium xl:py-3 py-1 xl:px-6 px-3 rounded-full">
              Instagram
            </a>
          </div>
        </div>
        <div className="img-wrapper flex-1 relative">
          <img src={creatorBg} alt="creatorBg" className=" xl:pl-28 md:pl-16" />
          <img
            src={creator}
            alt="creator"
            className="absolute creator-img 2xl:w-80 xl:w-64 lg:w-48 sm:w-80 w-48"
          />
          <h5 className="body 2xl:pl-80 xl:pl-64 lg:pl-52 sm:pl-80 pl-52 text-sm md:mt-14 mt-6">
            OUR CREATOR
          </h5>
          <h3 className="body 2xl:pl-80 xl:pl-64 lg:pl-52 sm:pl-80 pl-52 font-bold md:text-xl text-base">
            ANNA SMITH
          </h3>
        </div>
      </div>
      {/* <div className="review-wrapper flex lg:flex-nowrap flex-wrap-reverse justify-between lg:mt-32 mt-48 gap-20 2xl:px-32 xl:px-20 md:px-10 px-8">
        <div className="img-wrapper flex lg:w-max w-full justify-center">
          <img
            src={review1}
            alt="review1"
            className=" 2xl:w-96 xl:w-80 lg:w-60 sm:w-72 w-52 object-cover"
          />
          <img
            src={review2}
            alt="review2"
            className="2xl:w-96 xl:w-80 lg:w-60 sm:w-72 w-52 object-cover"
          />
        </div>
        <div className="content flex-1 ">
          <h6 className="body text-sm font-semibold">REVIEWS</h6>
          <h3 className="heading 2xl:text-4xl text-2xl 2xl:mt-7 mt-4">
            We adore all our friends at Maushme, especially the beauties who
            have come to live with us!
          </h3>
          <p className="body text-base 2xl:py-14 py-4">
            Interior designer Sarah Vaile remembers eyeing a New York City
            apartment—one with bold colors and a personality as distinct as its
            chic owner—in a 2014 issue of House Beautiful, and tucking it away
            for future design inspiration. Years later, in a serendipitous turn
            of events, the woman she’d seen in the magazine—a stylish figure now
            in her 30s—just moved to Chicago.
          </p>
          <div className="rating flex gap-4">
            <img src={rating} alt="rating" />
            <h5 className="body text-base font-semibold">5/5</h5>
          </div>
          <h3 className="heading 2xl:text-2xl text-base mt-6">Pamela S.</h3>
          <h6 className="body 2xl:text-base text-sm">Lake Forest, CA</h6>
        </div>
      </div> */}
      {/* <div className="subs-container mt-64 relative">
        <img src={subs} alt="sub-bg" className="absolute -z-10 pl-20" />
        <div className="sub-content pl-40 flex justify-between items-center pt-44">
        <h2 className="sub-title heading text-white font-light text-6xl flex-1">Subscribe to our newsletter for regular updates</h2>
        <div className="subs-input flex-1">
            <input type="email" name="email" id="email" placeholder="your@email.com" className=" w-8/12 py-4 px-8 opacity-60 body" />
            <button className=" bg-white px-6 py-4 rounded-full body" >Sign Up</button>
        </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
