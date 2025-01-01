import React from 'react';
import ui from "../Assets/Header/ui.svg";

const Footer = () => {
  return (
    <div className='mt-10'>
     <div className='p-5 flex flex-wrap'>
    <div className=' w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 pt-2'>
        <p className='font-semibold text-customGrayBlue'>Product</p>
        <ul className='pt-2 text-customGray'>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions   <span className="rounded-3xl p-1.5 w-2 bg-green-100 text-xs md:text-sm">New</span></li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
        </ul>
    </div>

    <div className=' w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6  pt-2'>
        <p className='font-semibold text-customGrayBlue'>Company</p>
        <ul className='pt-2 text-customGray'>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
        </ul>
    </div>

    <div className='w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 pt-2'>
        <p className='font-semibold text-customGrayBlue'>Resources</p>
        <ul className='pt-2 text-customGray'>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Support</li>
        </ul>
    </div>

    <div className=' w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 pt-2'>
        <p className='font-semibold text-customGrayBlue'>Usecases</p>
        <ul className='pt-2 text-customGray'>
            <li>Startups</li>
            <li>Enterprises</li>
            <li>Government</li>
            <li>SaaS Center</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
        </ul>
    </div>

    <div className='  w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 pt-2'>
        <p className=' text-customGrayBlue  font-semibold'>Social</p>
        <ul className='pt-2 text-customGray'>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Github</li>
            <li>AngelList</li>
            <li>Dribbble</li>
        </ul>
    </div>

    <div className=' w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 pt-2'>
        <p className='font-semibold text-customGrayBlue'>Legal</p>
        <ul className='pt-2 text-customGray'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>License</li>
            <li>Settings</li>
            <li>Contact</li>
        </ul>
    </div>
</div>

<div className="lg:flex lg:justify-between items-center p-5 mt-8 border-t">
 
  <div className="flex items-center gap-2">
    <img src={ui} alt="UI" className="h-8" />
    <h1 className="font-semibold text-lg">UntitledUI</h1>
  </div>

  
  <div className="mt-4 lg:mt-0 lg:ml-auto">
    <p className="text-sm  sm:mr-auto text-gray-500  lg:text-right">
      © 2077 Untitled UI. All rights reserved.
    </p>
  </div>
</div>

    </div>
  );
};

export default Footer;
