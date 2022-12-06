import React, { useState } from "react";
import { Navdata } from "./Navdata";

function Navbar() {
  const [active, setActive] = useState(0);
  const navActive = "bg-actColor opacity-100";
  const navNonActive = "opacity-80";

  const getActive = (ind) => {
    setActive(ind);
  };

  return (
    <>
      <div className="hidden w-full bg-Navcolor md:block">
        <div className="container flex h-full flex-row items-center">
          {Navdata.map((item, ind) => (
            <div
              key={ind}
              className={`flex h-full cursor-pointer self-center justify-self-center px-4 py-3 ${
                ind === active ? navActive : navNonActive
              }`}
              onClick={() => getActive(ind)}
            >
              <h1 className="font-serif font-kulen text-slate-50 md:text-[13px] lg:text-lg">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
