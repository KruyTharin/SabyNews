import React from "react";

function LeftContent({ title, image, bg }) {
  return (
    <div className={bg}>
      <div className="group aspect-w-16 aspect-h-8 bg-slate-800 shadow-lg">
        <img
          className="h-full w-full transform object-cover duration-200 group-hover:scale-95"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5">
        <h1 className="font-kulen text-[10px] line-clamp-3 md:text-lg md:text-slate-50">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default LeftContent;
