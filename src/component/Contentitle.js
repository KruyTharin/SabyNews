import React from "react";
import { FiChevronRight } from "react-icons/fi";
function Contentitle({ title, bgcolor }) {
  return (
    <div>
      <div className={`absolute -top-[55px] ${bgcolor}`}>
        <h1
          className={`h-[44px] translate-x-3 skew-x-12 px-2 py-3 font-kulen text-slate-50 ${bgcolor}`}
        >
          <p className="flex -skew-x-12 items-center">
            {title}
            <FiChevronRight />
          </p>
        </h1>
      </div>
      <div
         className={`w-full h-1 absolute -top-3 ${bgcolor}`}
      ></div>
    </div>
  );
}

export default Contentitle;
