import React from "react";

function RightContent({ title, image }) {
  return (
    <div>
      <div className="h-[164px] w-[200px] overflow-hidden md:w-[140px] lg:w-[120px] lg:h-[138px] md:h-[147px] xl:w-[150px] xl:h-[154px]">
        <div className="group aspect-w-3 aspect-h-2 bg-slate-800 ">
          <img
            className="object-cover duration-100 group-hover:scale-95"
            src={image}
            alt="images"
          />
        </div>
        <h1 className="p-[2px] font-Battambang text-[10px] line-clamp-3 md:text-[12px]">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default RightContent;
