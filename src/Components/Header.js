  import React from 'react'
  import ui from "../Assets/Header/ui.svg"
  import downtag from "../Assets/Header/chevron-down.svg"
  import navigation_actionf from "../Assets/Header/_Navigation actions.svg"
  import nav_menu from "../Assets/Header/_Nav menu button.svg";
  const Header = () => {
    return (
      <div className="flex  items-center p-5">
        
        <div className="flex items-center space-x-2">
          <img src={ui} className="w-8 h-auto" alt="Logo for Untitled UI" />
          <p className="font-bold text-lg">Untitled UI</p>
        </div>
  
        
        <ul className="hidden md:flex items-center space-x-6 ml-10">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="relative hover:underline cursor-pointer flex items-center">
            Products
            <img src={downtag} className="w-3 ml-1" alt="Dropdown icon" />
          </li>
          <li className="relative hover:underline cursor-pointer flex items-center">
            Resources
            <img src={downtag} className="w-3 ml-1" alt="Dropdown icon" />
          </li>
          <li className="hover:underline cursor-pointer">Pricing</li>
        </ul>
  
        
        <img
  src={navigation_actionf}
  className="w-7 h-auto hidden lg:block mr-12 ml-auto
   max-w-full"
  alt="Navigation Action Icon"
/>
<img
  src={nav_menu}
  className="w-7 h-auto lg:hidden ml-auto max-w-full"
  alt="Navigation Action Icon"
/>



      </div>
    );
  };
  
  export default Header;
  