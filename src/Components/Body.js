import React from "react";
import arrow_right from "../Assets/arrow-right.svg";
import play_circle from "../Assets/play-circle.svg";
import content from "../Assets/Content.svg";
import Header from "./Header";
import Features from "./Features";
import Socialsection from "./Socialsection";
import Testimonial from "./Testimonial";
import Cuttingedgesection from "./Cuttingedgesection";
import Frequentlyasked from "./Frequentlyasked";
import Blogsection from "./Blogsection";
import Ctasection from "./Ctasection";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="lg:ml-10">
      
      <Header />

      
      <div className="flex flex-col items-center justify-center px-10 mt-12 space-y-8">
        
        <div className="flex items-center space-x-4 rounded-2xl p-1 bg-purple-50 text-violet-600 ">
          <div className="rounded-2xl  bg-white  ">
            <p className="text-sm font-medium pl-1">New feature</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-sm">Check out the team dashboard</p>
            <img src={arrow_right} alt="Arrow pointing right" />
          </div>
        </div>

        
        <h1 className="text-center text-4xl font-extrabold text-gray-800 leading-tight">
          Beautiful analytics to grow smarter
        </h1>

        
        <p className="text-center text-gray-600 text-lg ml-5 sm:w-4/5   w-3/6  leading-relaxed">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users.
          Trusted by over 4,000 startups.
        </p>

        <div className="flex flex-col md:flex-row md:space-x-4 justify-center space-y-4 md:space-y-0  w-full  ">
  
  <button className="order-1 md:order-2 px-6 py-3 bg-violet-800 text-white rounded-lg shadow-md hover:bg-gray-900 w-full md:w-auto ml-2">
    Sign Up
  </button>

  
  <button className="  order-2 md:order-1 flex items-center space-x-2 px-6 py-3 rounded-lg shadow-md w-full md:w-auto justify-center ">
    <img src={play_circle} alt="Play demo icon" className="w-5 h-5 items-center" />
    <span className="" >Demo</span>
  </button>
</div>


        
        <div>
          <img src={content} alt="Illustrative content graphic" className="w-full" />
        </div>
      </div>
      
      <Socialsection/>
      
      
      <Features/>
      
        <Testimonial/>
        <Cuttingedgesection/>
        <Frequentlyasked/>
       <Blogsection/>
       <Ctasection/>
       <Footer/>
    </div>
  );
};

export default Body;
