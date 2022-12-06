import React from "react";

function ContentData({ image, title, desc, date, bgtitle }) {
  return (
    <>
      <img
        className="h-full object-cover group-hover:mix-blend-overlay"
        src={image}
        alt="images"
      />
      <div className={`absolute top-1 left-0 ${bgtitle}`}>
        <h1
          className={`translate-x-3 skew-x-12 px-2 py-1 font-kulen text-slate-50 ${bgtitle}`}
        >
          <p className="-skew-x-12">{title}</p>
        </h1>
      </div>
      <h1 className="absolute bottom-5 left-4 font-kulen text-lg text-slate-50 transition-all duration-500 group-hover:-translate-y-7 group-hover:text-Navcolor md:bottom-10">
        {desc}
      </h1>
      <p className="absolute bottom-1 left-4 font-kulen text-sm text-slate-50">
        {date}
      </p>
    </>
  );
}

export default ContentData;
