import React from 'react';
import sisyphus from "../Assets/testimonialsection/Sisyphus.svg";
import avatar from "../Assets/testimonialsection/Avatar.svg";

const Testimonial = () => {
  return (
    <div className=" p-6 rounded-lg mt-10 mx-auto text-center w-full h-full">
      <div className="flex items-center justify-center mb-4">
        <img src={sisyphus} alt="Sisyphus logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold">Sisyphus</span>
      </div>
      <p className="text-gray-700 mb-6b text-3xl font-semibold">
        “We’ve been using Untitled to kickstart every new
        <br></br> project and can’t imagine working without it.”
      </p>
      <img src={avatar} alt="Candice Wu" className="h-16 w-16 rounded-full mx-auto mb-2 mt-10" />
      <h1 className="text-lg font-semibold">Candice Wu</h1>
      <p className="text-sm text-gray-500">Product Manager, Sisyphus</p>
    </div>
  );
};

export default Testimonial;
