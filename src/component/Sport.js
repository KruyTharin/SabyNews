import React from "react";
import SportData from "../component/ContentData";

function Sport() {
  return (
    <div className="my-5 hidden h-[500px] w-full md:block">
      <div className="grid h-full w-full grid-cols-3 space-x-2">
        <div className="col-span-2 grid h-[500px] overflow-hidden bg-slate-400">
          <div className="grid h-[250px] grid-cols-5">
            <div className="group relative col-span-3 grid h-full cursor-pointer bg-rose-50 bg-gradient-to-t from-slate-900 to-slate-400 hover:text-Navcolor">
              <SportData
                image="./1.jpg"
                title="កីឡា"
                desc="ស្គាល់​ឱ្យ​ច្បាស់! ​គុន​ល្បុក្កតោ
                ​ដែល​ទើប​ចុះ​ក្នុង​បញ្ជី​បេតិកភណ្ឌ​អរូបី​នៃអង្គការ​ UNESCO"
                date="ថ្ងៃនេះ ម៉ោង 14:09"
                bgtitle="bg-dodger-blue"
              />
            </div>
            <div className="group relative col-span-2 grid h-full cursor-pointer bg-rose-50 bg-gradient-to-t from-slate-900 to-slate-400 hover:text-Navcolor">
              <SportData
                image="./2.png"
                title="កម្សាន្ត"
                desc="ស្គាល់ D.O ច្បាស់ និងដឹងពី ៧ ចំណុច​នេះហើយ អ្នកពិបាកព្រងើយកន្តើយដាក់ណាស់"
                date="ម្សិលមិញ ម៉ោង 10:21"
                bgtitle="bg-pink-500"
              />
            </div>
          </div>
          <div className="grid h-[250px] grid-cols-5">
            <div className="group relative col-span-3 grid h-[250px] cursor-pointer bg-rose-50 bg-gradient-to-t from-slate-900 to-slate-400 hover:text-Navcolor">
              <SportData
                image="./3.jpg"
                title="កម្សាន្ត"
                desc="ចម្លើយមួយម៉ាត់របស់ សេង មង្គល ធ្វើឲ្យ ទ្រី ដាណា ឌឺទៅកាន់អ្នកពូកែទើសគ្រប់គ្នា"
                date="ថ្ងៃនេះ ម៉ោង 14:09"
                bgtitle="bg-pink-500"
              />
            </div>
            <div className="group relative col-span-2 grid h-[250px] cursor-pointer bg-rose-50 bg-gradient-to-t from-slate-900 to-slate-400 hover:text-Navcolor">
              <SportData
                image="./4.jpg"
                title="ជីវិតនិងសង្គម"
                desc="រដ្ឋបាលរាជធានីភ្នំពេញ សម្រេច​កែសម្រួលប្លង់គោល​១ ដែល​ជំរុញ​ការ​អភិវឌ្ឍន៍​ រាជធានី​ភ្នំពេញ ទៅ​ជាបេះដូង​របស់​កម្ពុជា"
                date="ម្សិលមិញ ម៉ោង 10:21"
                bgtitle="bg-sea-buckthorn"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 grid h-[500px] space-y-1">
          <img className="h-[247px]" src="./BannerLeft.png" alt="" />
          <img className="h-[247px]" src="./BannerLeft.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sport;
