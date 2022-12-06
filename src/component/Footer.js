import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";

function Footer() {
  const ArrImg = [
    "./l1.png",
    "./l2.png",
    "./l3.png",
    "./l4.png",
    "./l5.png",
    "./l6.png",
    "./l7.png",
    "./l8.png",
    "./l9.png",
    "./l10.png",
  ];
  const Icon = [
    <BsFacebook />,
    <AiFillInstagram />,
    <BsTelegram />,
    <SiTiktok />,
    <AiFillYoutube />,
  ];
  return (
    <div>
      <div className="w-full overflow-hidden bg-black p-10 ">
        <div className="grid gap-x-0 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 md:items-start justify-center md:justify-start-start md:p-5">
            <div>
              <img
                className="w-[100px] object-cover"
                src="./footerlogo.png"
                alt="images"
              />
            </div>
            <div className="flex flex-col md:justify-start md:items-start justify-center items-center">
              <h1 className="font-Battambang text-center md:text-start text-slate-500">
                ​© រក្សា​សិទ្ធិ​គ្រប់​យ៉ាង​ដោយ​ Sabay ឆ្នាំ​២០១៦
              </h1>
              <a
                className="font-kulen text-slate-500 text-center md:text-start"
                href="https://sabay.com/privacy-policy/"
              >
                គោលការណ៍​ភាព​ឯកជន | Privacy Policy
              </a>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start">
              <h1 className="font-kulen text-slate-300">អាសយដ្ឋាន</h1>
              <p className="font-Battambang text-sm text-slate-500 md:text-lg text-center md:text-start">
                អគារ​លេខ ៣០៨ មហាវិថីព្រះមុន្នីវង្ស សង្កាត់បឹងរាំង ខណ្ឌដូនពេញ
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 md:p-5">
            <h1 className="hidden font-kulen text-2xl text-slate-50 md:block">
              អំពីយើង
            </h1>
            <h1 className="text-md hidden font-Battambang text-slate-500 md:block">
              Sabay Digital Corporation ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល
              និង​កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។{" "}
              <a className="hover:text-slate-200" href="https://sabay.com/">
                ព័ត៌មាន​បន្ថែម
              </a>
            </h1>
            <h1 className="text-md hidden font-Battambang text-slate-500 md:block">
              ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay
            </h1>
            <div className="hidden flex-row gap-x-1 md:flex">
              {ArrImg.map((item, ind) => (
                <img className="w-[40px]" src={item} alt={item} key={ind} />
              ))}
            </div>
          </div>
          <div className="mt-3 flex flex-col items-center space-y-5 md:mt-0 md:items-start md:p-5">
            <h1 className="text-md font-kulen text-slate-500 md:text-2xl md:text-slate-50">
              ជួបគ្នានៅបណ្តាញសង្គម
            </h1>
            <div>
              <div className="flex cursor-pointer flex-row space-x-1 text-2xl text-slate-100">
                {Icon.map((item, ind) => (
                  <div key={ind} className=" hover:text-slate-500">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start">
              <p className="text-md font-kulen text-slate-500">ទំនាក់ទំនង </p>
              <p className="text-md font-kulen text-slate-500">
                info@sabay.com
              </p>
              <p className="text-md font-kulen text-slate-500"> 023 228 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
