import React from 'react';
import icon_minus from "../Assets/faqicons/Icon minus.svg";
import icon_plus from "../Assets/faqicons/Icon plus.svg";
import Avatar_icon from "../Assets/faqicons/Avatar group.svg";
import { arr } from '../utildata.js/Features';

const Frequentlyasked = () => {
  return (
    <div className="mt-10 py-10 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-4">Everything you need to know about the product and billing.</p>
      </div>

      
      <div className="max-w-3xl mx-auto">
        
        <div className="border-b py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Is there a free trial available?</h2>
            <img src={icon_minus} alt="Collapse" className="h-5 w-5" />
          </div>
          <p className="text-gray-600 mt-2">
            Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
          </p>
        </div>

        
        {arr.map((question, index) => (
          <div key={index} className="border-b py-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
              <img src={icon_plus} alt="Expand" className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-10 w-4/5  lg:ml-20  bg-gray-50">
        <img src={Avatar_icon} alt="Team Avatar" className="h-16 w-16 mx-auto mb-4" />
        <h2 className="text-lg font-semibold text-gray-800">Still have questions?</h2>
        <p className="text-gray-600 mt-2">
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <button className="mt-4 mb-5 px-6 py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Frequentlyasked;
