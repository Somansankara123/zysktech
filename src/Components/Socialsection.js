import React from "react";
import shapebolt from "../Assets/socialsection/Shapebolt.svg";
import lightBox from "../Assets/socialsection/Logomark.svg";
import featherDev from "../Assets/socialsection/Featherdev.svg";
import sphereRule from "../Assets/socialsection/sphererule.svg";
import globalBank from "../Assets/socialsection/globalbank.svg";
import Nietzsche from "../Assets/socialsection/Neitzschale.svg";

const Socialsection = () => {
  return (
    <div className="text-center py-8 ml-10 mt-10">
      <p className=" font-inter mb-6 pt-10 ">
        Join 4,000+ companies already growing
      </p>
      <div className="flex lg:ml-20 flex-wrap gap-10 ">
  <div className="text-center flex   lg:w-auto lg:pl-10 space-x-2">
    <img src={shapebolt} alt="ShapeBolt logo" className=" mb-2 w-7 h-7" />
    <p className="text-lg font-medium">BoltShift</p>
  </div>
  <div className="text-center flex   lg:w-auto space-x-2">
    <img src={lightBox} alt="Lightbox logo" className="mx-auto mb-2 w-7 h-7" />
    <p className="text-lg font-medium">Lightbox</p>
  </div>
  <div className="text-center flex  lg:w-auto space-x-2">
    <img src={featherDev} alt="FeatherDev logo" className="mx-auto mb-2 w-7 h-7" />
    <p className="text-lg font-medium">FeatherDev</p>
  </div>
  <div className="text-center flex  lg:w-auto space-x-2">
    <img src={sphereRule} alt="Spherule logo" className="mx-auto mb-2 w-7 h-7" />
    <p className="text-lg font-medium">Spherule</p>
  </div>
  <div className="text-center flex lg:w-auto space-x-2">
    <img src={globalBank} alt="GlobalBank logo" className="mx-auto mb-2 w-7 h-7" />
    <p className="text-lg font-medium">GlobalBank</p>
  </div>
  <div className="text-center flex  lg:w-auto space-x-2">
    <img src={Nietzsche} alt="Nietzsche logo" className="mx-auto mb-2 w-7 h-7" />
    <p className="text-lg font-medium">Nietzsche</p>
  </div>
</div>

    </div>
  );
};

export default Socialsection;
