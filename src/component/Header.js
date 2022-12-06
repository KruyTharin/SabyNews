import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navdata } from "./Navdata";

function Header() {
  const [active, setActive] = useState(0);
  const navActive = "bg-actColor opacity-100";
  const navNonActive = "opacity-80";
  const show = "h-[310px] duration-300";
  const hidden = "h-[0px] duration-300";
  const [togle, settoggle] = useState(false);

  const getActive = (ind) => {
    setActive(ind);
  };

  return (
    <div className="w-full bg-black">
      <div className="container flex flex-row items-center justify-between py-2 md:py-4 ">
        <GiHamburgerMenu
          onClick={() => settoggle(!togle)}
          className="block cursor-pointer text-xl text-slate-50 md:hidden"
        />
        <img
          className="h-[40px] w-[40px] md:h-[82px] md:w-[82px]"
          src="./sabyLogo.png"
          alt="images"
        />
        <img className="hidden max-w-xl md:block" src="./Banner.jpg" alt="images"/>
        <img
          className="block h-[38px] w-[57px] md:hidden"
          src="./Bannersm.gif"
          alt='images'
        />
      </div>
      <div>
        <div
          className={`grid grid-cols-2 overflow-hidden md:hidden ${
            togle ? show : hidden
          } `}
        >
          {Navdata.map((item, ind) => (
            <div
              key={ind}
              className={`flex h-full cursor-pointer px-4 py-3 first:col-span-2 last:mt-3 ${
                ind === active ? navActive : navNonActive
              }`}
              onClick={() => getActive(ind)}
            >
              <h1 className="font-serif px-[15px] font-kulen text-slate-50 md:text-[13px] lg:text-lg ">
                {item.name}
              </h1>
            </div>
          ))}
          <div className="col-span-2 my-4 flex justify-center">
            <img className="h-[40px] w-[70px]" src="./footer-logo.png" alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
