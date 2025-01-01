import React from 'react';

import mobile from "../Assets/featuresection/mobileiphone.svg";
import messageChat from "../Assets/featuresection/message-chat-circle.svg";
import featuredIcon from "../Assets/featuresection/Featured icon.svg";
import reportIcon from "../Assets/featuresection/Reporticon.svg";
import arrow_right from "../Assets/arrow-right.svg";
import fullscreen from "../Assets/featuresection/fullscreen.svg"

const CuttingEdgeSection = () => {
  return (
    <div className="lg:py-10  lg:px-6 md:px-10">
      
      <div className="text-center mb-10">
        <span className="bg-purple-100 text-purple-600 rounded-2xl px-4 py-1 text-sm inline-block">
          Features
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
          Cutting-edge features for advanced analytics
        </h1>
        <p className="text-gray-600 mt-4">
          Powerful, self-serve product and growth analytics to help you convert, engage,<br></br>
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      
      <div className="flex lg:justify-center lg:items-center mb-8">
  
  <img 
    src={fullscreen} 
    alt="Dashboard showing analytics" 
    className="lg:block hidden w-4/5" 
  />
  
  
  <img 
    src={mobile} 
    alt="iPhone mockup displaying app interface" 
    className="lg:hidden block sm:w-full sm:h-3/5" 
  />
</div>


      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl  lg:mx-auto">
  
  <div className="text-center mt-6"> {/* Increased margin top */}
    <img src={messageChat} alt="Team collaboration feature" className="mx-auto mb-6 w-12 md:w-16" /> {/* Smaller icon */}
    <h2 className="text-lg font-semibold text-gray-800">Share team inboxes</h2>
    <p className="text-gray-600 mt-2 text-sm sm:text-base">
      Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
    </p>
    <div className="flex items-center justify-center space-x-4 mt-4">
      <p className="text-sm sm:text-base">Learn More</p>
      <img src={arrow_right} alt="arrow right" className="w-4 h-4" />
    </div>
  </div>

  
  <div className="text-center mt-6"> 
    <img src={featuredIcon} alt="Instant answers feature" className="mx-auto mb-6 w-12 md:w-16" /> {/* Smaller icon */}
    <h2 className="text-lg font-semibold text-gray-800">Deliver instant answers</h2>
    <p className="text-gray-600 mt-2 text-sm sm:text-base">
      An all-in-one customer service platform that helps you balance everything your customers need to be happy.
    </p>
    <div className="flex items-center justify-center space-x-4 mt-4">
      <p className="text-sm sm:text-base">Learn More</p>
      <img src={arrow_right} alt="arrow right" className="w-4 h-4" />
    </div>
  </div>

  
  <div className="text-center mt-6"> 
    <img src={reportIcon} alt="Team management reports feature" className="mx-auto mb-6 w-12 md:w-16" /> 
    <h2 className="text-lg font-semibold text-gray-800">Manage your team with reports</h2>
    <p className="text-gray-600 mt-2 text-sm sm:text-base">
      Measure what matters with our easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.
    </p>
    <div className="flex items-center justify-center space-x-4 mt-4">
      <p className="text-sm sm:text-base">Learn More</p>
      <img src={arrow_right} alt="arrow right" className="w-4 h-4" />
    </div>
  </div>
</div>

      </div>
    
  );
};

export default CuttingEdgeSection;
