import React from "react";
import Contentitle from "../component/Contentitle";

function Video() {
  const VideoData = [
    {
      img: "./v2.jpg",
      title:
        "ក្រោយស្មើអេស្ប៉ាញ ក្រុមអាល្លឺម៉ង់ត្រូវការធ្វើលក្ខខណ្ឌ ២នេះដាច់ខាតនៅប្រកួតក្រោយដើម្បីឡើងវគ្គបន្ត",
    },
    {
      img: "./v3.jpg",
      title:
        "ស្មាត់​ យុន​ ប្រាប់​មូលហេតុ​លោត​វាយ​សេវា​មិន​សូវ​បាន​ល្អ​ពេល​ប៉ះ​ គោព្រៃ​កណ្ដាល​",
    },
    {
      img: "./v4.jpg",
      title:
        "ស្ដេចអារ៉ាប៊ី ឲ្យពលរដ្ឋឈប់សម្រាកមួយប្រទេស​ ក្រោយជម្រើសជាតិយកឈ្នះអាហ្សង់ទីនផ្អើលពិភពលោក",
    },
  ];
  const VideoData1 = [
    {
      img: "./v1.jpg",
      title:
        "ក្រោយស្មើអេស្ប៉ាញ ក្រុមអាល្លឺម៉ង់ត្រូវការធ្វើលក្ខខណ្ឌ ២នេះដាច់ខាតនៅប្រកួតក្រោយដើម្បីឡើងវគ្គបន្ត",
    },
    {
      img: "./v2.jpg",
      title:
        "ស្មាត់​ យុន​ ប្រាប់​មូលហេតុ​លោត​វាយ​សេវា​មិន​សូវ​បាន​ល្អ​ពេល​ប៉ះ​ គោព្រៃ​កណ្ដាល​",
    },
    {
      img: "./v4.jpg",
      title:
        "ស្ដេចអារ៉ាប៊ី ឲ្យពលរដ្ឋឈប់សម្រាកមួយប្រទេស​ ក្រោយជម្រើសជាតិយកឈ្នះអាហ្សង់ទីនផ្អើលពិភពលោក",
    },
    {
      img: "./v7.jpg",
      title:
        "២គ្រាប់ នៅ៦នាទីចុងម៉ោង ជួយហូឡង់ ឈ្នះសេណេហ្គាល់ ក្នុងប្រកួតដ៏តានតឹងសម្រាប់ពូល A",
    },
    {
      img: "./v1.jpg",
      title:
        "ក្រោយស្មើអេស្ប៉ាញ ក្រុមអាល្លឺម៉ង់ត្រូវការធ្វើលក្ខខណ្ឌ ២នេះដាច់ខាតនៅប្រកួតក្រោយដើម្បីឡើងវគ្គបន្ត",
    },
    {
      img: "./v2.jpg",
      title:
        "ស្មាត់​ យុន​ ប្រាប់​មូលហេតុ​លោត​វាយ​សេវា​មិន​សូវ​បាន​ល្អ​ពេល​ប៉ះ​ គោព្រៃ​កណ្ដាល​",
    },
    {
      img: "./v4.jpg",
      title:
        "ស្ដេចអារ៉ាប៊ី ឲ្យពលរដ្ឋឈប់សម្រាកមួយប្រទេស​ ក្រោយជម្រើសជាតិយកឈ្នះអាហ្សង់ទីនផ្អើលពិភពលោក",
    },
    {
      img: "./v7.jpg",
      title:
        "២គ្រាប់ នៅ៦នាទីចុងម៉ោង ជួយហូឡង់ ឈ្នះសេណេហ្គាល់ ក្នុងប្រកួតដ៏តានតឹងសម្រាប់ពូល A",
    },
  ];
  return (
    <div className="relative mt-[130px]">
      <Contentitle
        title="វីដេអូ"
        bgcolor="bg-rose-500 "
      />
      <div className="6-lg mb-5 shadow-lg">
        <div className="grid grid-cols-3 gap-2 overflow-hidden p-4">
          {VideoData.map((item, ind) => (
            <div key={ind}>
              <div className="group aspect-w-3 aspect-h-2 overflow-hidden bg-slate-800">
                <img
                  className="transform object-cover duration-100 group-hover:scale-y-95"
                  src={item.img}
                  alt="images"
                />
              </div>
              <h1 className="font-Battambang text-[12px] line-clamp-3 md:text-[15px]">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="grid space-x-3 p-5 md:grid-cols-6">
          <div className="grid md:col-span-6 lg:col-span-4 ">
            <div className="grid grid-cols-2 gap-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
              {VideoData1.map((item, ind) => (
                <div key={ind} className="overflow-hidden md:my-0 md:h-[195px] md:last:hidden lg:last:block">
                  <div className="group aspect-w-3 aspect-h-2 bg-slate-800">
                    <img
                      className="h-full w-full transform object-cover shadow-xl duration-100 group-hover:scale-y-95 md:h-full"
                      src={item.img}
                      alt="images"
                    />
                  </div>
                  <p className="font-Battambang text-sm text-[12px] line-clamp-3">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 hidden h-[100px] space-y-2 bg-sky-200 lg:grid">
            <img className="w-full" src="g1.gif" alt="images" />
            <img className="w-full" src="g2.gif" alt="images" />
            <img className="w-full" src="g3.jpg" alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
